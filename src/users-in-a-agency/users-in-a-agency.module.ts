import { Module } from '@nestjs/common';
import { UsersInAAgencyService } from './users-in-a-agency.service';
import { UsersInAAgencyController } from './users-in-a-agency.controller';

@Module({
  controllers: [UsersInAAgencyController],
  providers: [UsersInAAgencyService],
})
export class UsersInAAgencyModule {}
