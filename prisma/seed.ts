import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { PasswordService } from 'src/auth/password.service';
import { hash, compare } from 'bcrypt';
// Reading the JSON file

const prisma = new PrismaClient();
const fs = require('fs');
const { parse } = require('csv-parse');

const createHashedPassword = async (password) => {
  return await hash(password, 10);
};

async function main() {
  console.log('hi');
  fs.createReadStream('prisma/PlanetseraReward.csv')
    .pipe(parse({ delimiter: ',', from_line: 2 }))
    .on('data', async function (row) {
      try {
        const hashedPassword = await createHashedPassword(row[6]);

        const user = await prisma.user.upsert({
          where: {
            email: row[4].toLowerCase(),
          },
          update: {
            name: row[3],
            role: 'CUSTOMER',
          },
          create: {
            name: row[3],
            mobileNumber: row[5],
            email: row[4].toLowerCase(),
            role: 'CUSTOMER',
            password: hashedPassword,
          },
        });

        const buyerCreated = await prisma.buyer.upsert({
          where: {
            userId: user.id,
          },
          update: {
            userId: user.id,
          },
          create: {
            userId: user.id,
          },
        });

        const rewardCode = await prisma.rewardCode.create({
          data: {
            rewardCode: row[7],
            userId: user.id,
          },
        });
      } catch (err) {
        console.log('err', err);
      }
    })
    .on('error', function (error) {
      console.log(error.message);
    });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
