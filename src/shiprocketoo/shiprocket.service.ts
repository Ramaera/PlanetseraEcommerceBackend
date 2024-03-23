import { Injectable } from '@nestjs/common';
import { CreateShipRocketDetailInput } from './dto/create-shipRocket.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ShipRocketService {
  constructor(private readonly prisma: PrismaService) {}

  async shipRocketDetails(createShipRocketDetailInput: CreateShipRocketDetailInput) {
    try {
      const shipRocketOrderDetails = await this.prisma.shipRocketDetails.create({
        data: {
          orderId: createShipRocketDetailInput.orderId,
          shiprocket_OrderId: createShipRocketDetailInput.shiprocket_OrderId,
          shiprocket_ShipmentId: createShipRocketDetailInput.shiprocket_ShipmentId,
          shiprocket_status: createShipRocketDetailInput.shiprocket_status,
          shiprocket_status_code: createShipRocketDetailInput.shiprocket_status_code        
        }
      });
      
      return shipRocketOrderDetails;
    } catch (error) {
      console.error('Error creating ShipRocket Order Details:', error);
      throw new Error('Could not create order ');
    }
  }

  async findAllShipRocketDetails() {
    const ShipRocketOrderDetails = await this.prisma.shipRocketDetails.findMany({
      include: {
        Order: true,
        
      },
    });
    return ShipRocketOrderDetails
  }
}



