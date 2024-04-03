import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersInAAgencyService } from './users-in-a-agency.service';



@Controller('users-in-a-agency')
export class UsersInAAgencyController {
  constructor(private readonly usersInAAgencyService: UsersInAAgencyService) {}

  @Get('users/:agencyCode')
  async getUsersInAgency(
    @Param('agencyCode') agencyCode: string,
  ) {
    return await this.usersInAAgencyService.findAllByAgency(agencyCode);
  }


  @Get('total-order-amount/:agencyCode/:OrderMonthYear')
async getTotalOrderAmountForAgency(
  @Param('agencyCode') agencyCode: string,
  @Param('OrderMonthYear') OrderMonthYear: string,
) {
  return await this.usersInAAgencyService.getTotalOrderAmountForAgency(agencyCode, OrderMonthYear);
}



  
}
