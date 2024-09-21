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
      },
      include: {
        Order: {
          select: {
            orderAmount: true,
            orderDate: true,
            user: true,
            id: true,
          },
        },
      },
    });

    // console.log('users', users);
    if (!users || users.length === 0) {
      throw new NotFoundException(`No users found for agencyCode: ${agencyId}`);
    }
    return users;
  }

  async getTotalOrderAmountForAgency(agencyId: string, OrderMonthYear: string) {
    const [year, month] = OrderMonthYear.split('-').map(Number);
    const firstDayOfMonth = new Date(year, month - 1, 1);

    // Calculate the first day of the next month
    const firstDayOfNextMonth = new Date(year, month, 1);

    const users = await this.prisma.user.findMany({
      where: {
        agencyCode: agencyId,
        Order: {
          some: {
            orderDate: {
              gte: firstDayOfMonth,
              lt: firstDayOfNextMonth,
            },
          },
        },
      },
      include: {
        Order: {
          select: {
            orderAmount: true,
            orderDate: true,
          },
          where: {
            orderDate: {
              gte: firstDayOfMonth,
              lt: firstDayOfNextMonth,
            },
          },
        },
      },
    });

    if (!users || users.length === 0) {
      throw new NotFoundException(`No users found for agencyCode: ${agencyId}`);
    }

    const totalOrderAmountForAgency = users.reduce((acc, user) => {
      const userTotalOrderAmount = user.Order.reduce(
        (userAcc, order) => userAcc + order.orderAmount,
        0,
      );
      return acc + userTotalOrderAmount;
    }, 0);

    const tenPercentOfTotal = totalOrderAmountForAgency * 0.1;
    const roundedTenPercent = Math.round(tenPercentOfTotal);

    return { totalOrderAmountForAgency, roundedTenPercent };
  }
}
