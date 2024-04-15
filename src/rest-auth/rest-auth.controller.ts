import { Controller, Post, Body } from '@nestjs/common';
import { RestAuthService } from './rest-auth.service';
import { RestSignupInput } from './dto/signup.input';
import { LoginInput } from './dto/login.input';
// import { Auth } from './models/auth.model';

@Controller('rest-auth')
export class RestAuthController {
    constructor(private readonly restAuthService: RestAuthService) {}

    @Post('signup')
    create(@Body() signupDto: RestSignupInput) {
      return this.restAuthService.createUser(signupDto)
    }

    

    @Post('login')
    async login(@Body() { email, password }: LoginInput) {
      const { user, tokens } = await this.restAuthService.login(
        email.toLowerCase(),
        password,
      );
  
      return {
        user,
        tokens,
      };
    }
  
  }


   





