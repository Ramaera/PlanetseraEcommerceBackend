import { Module } from '@nestjs/common';
import { ShipRocketService } from './shiprocket.service';
import { ShipRocketResolver } from './shiprocket.resolver';

@Module({
  providers: [ShipRocketResolver, ShipRocketService]
})
export class ShipRocketModule {}
