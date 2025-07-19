import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { faker } from '@faker-js/faker';

async function main() {
  // await prisma.product.createMany({
  //   data: Array.from({ length: 20 }).map(() => ({
  //     title: faker.commerce.product(),
  //     body: faker.commerce.productDescription(),
  //     price: parseFloat(faker.commerce.price()),
  //     image: faker.image.url(),
  //     createdAt: new Date(),
  //     color: faker.color.rgb(),
  //     size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL'])
  //   }))
  // })

}
main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 