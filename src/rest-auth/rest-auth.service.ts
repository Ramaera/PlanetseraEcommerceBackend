import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './password.service';
import { PrismaService } from 'nestjs-prisma';
import { RestSignupInput } from './dto/signup.input';
import { Token } from './models/token.model';
import { Prisma, User } from '@prisma/client';
import {
    Injectable,
    NotFoundException,
    BadRequestException,
    ConflictException,
    UnauthorizedException,
  } from '@nestjs/common';
import { SecurityConfig } from 'src/common/configs/config.interface';



@Injectable()
export class RestAuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly prisma: PrismaService,
        private readonly passwordService: PasswordService,
        private readonly configService: ConfigService,
      ) {}
    async createUser(payload: RestSignupInput) {
        const hashedPassword = await this.passwordService.hashPassword(
          payload.password,
        );
    
        try {
          const user = await this.prisma.user.create({
            data: {
              ...payload,
              password: hashedPassword,
              role: 'CUSTOMER',
            },
            select: {
                id: true,
                email: true,
               mobileNumber:true,
               name:true,
               role:true

              },
          });
          await this.prisma.buyer.create({
            data: {
              userId: user.id,
            },
          });

          const tokens = await this.generateTokens({
            userId: user.id,
          });
    
          
          return {
            user,
            tokens,
          };
        } catch (e) {
          if (
            e instanceof Prisma.PrismaClientKnownRequestError &&
            e.code === 'P2002'
          ) {
            throw new ConflictException(`Email ${payload.email} already used.`);
          }
          throw new Error(e);
        }
      }

      async login(email: string, password: string) {
        const userWithPassword = await this.prisma.user.findUnique({
            where: { email },
          });    
        
        if (!userWithPassword) {
          throw new NotFoundException(`No user found for email: ${email}`);
        }
    
        const passwordValid = await this.passwordService.validatePassword(
          password,
          userWithPassword.password,
        );
    
        if (!passwordValid) {
          throw new BadRequestException('Invalid password');
        }
        const user = await this.prisma.user.findUnique({
            where: { email },
            select: {
              id: true,
              email: true,
              mobileNumber:true,
              name:true,
              role:true
              
            },
          });
    
        const tokens = await this.generateTokens({
            userId: user.id,
          });
    
          
          return {
            user,
            tokens,
          };
      }



      validateUser(userId: string): Promise<User> {
        return this.prisma.user.findUnique({ where: { id: userId } });
      }

      generateTokens(payload: { userId: string }): Token {
        return {
          accessToken: this.generateAccessToken(payload),
          refreshToken: this.generateRefreshToken(payload),
        };
      }
      private generateAccessToken(payload: { userId: string }): string {
        return this.jwtService.sign(payload);
      }
    
      private generateRefreshToken(payload: { userId: string }): string {
        const securityConfig = this.configService.get<SecurityConfig>('security');
        return this.jwtService.sign(payload, {
          secret: this.configService.get('JWT_REFRESH_SECRET'),
          expiresIn: securityConfig.refreshIn,
        });
      }
  }