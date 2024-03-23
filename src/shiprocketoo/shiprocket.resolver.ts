import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ShipRocketService } from './shiprocket.service';
import { ShipRocketOrderDetails } from './entities/shiprocketDetail.entity';
import { CreateShipRocketDetailInput } from './dto/create-shipRocket.input';
 


@Resolver(() => ShipRocketOrderDetails)
export class ShipRocketResolver {
  constructor(private readonly   shipRocketService: ShipRocketService) {}

 
  @Mutation(() => ShipRocketOrderDetails)
  async shipRocketDetails(@Args('ShipRocketDetails') createShipRocketDetailInput: CreateShipRocketDetailInput) {
   return this.shipRocketService.shipRocketDetails(createShipRocketDetailInput)
  }


  @Query(() => [ShipRocketOrderDetails], { name: 'AllShipRocketOrderDetails' })
  async findAllShipRocketDetails(): Promise<ShipRocketOrderDetails[]> {
    return await this.shipRocketService.findAllShipRocketDetails();
  }
}
