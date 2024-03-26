import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { User } from 'src/users/models/user.model';

@Injectable()
export class UsersInAAgencyService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllByAgency(agencyId: string) {
    
      const users = await this.prisma.user.findMany({
        where: {
          agencyCode: agencyId,
        },include: {
          Order:{
            select: {
              orderAmount: true, 
          }
          }
        },
      });
      console.log("users",users)
      if (!users || users.length === 0) {
        throw new NotFoundException(`No users found for agencyCode: ${agencyId}`);
      }
      return users;
    
  }
}
