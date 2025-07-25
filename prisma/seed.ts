import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { faker } from '@faker-js/faker';

async function main() {
  // await prisma.product.createMany({
  //   data: Array.from({ length: 20 }).map(() => ({
  //    title: faker.commerce.product(),
  // body: faker.commerce.productDescription(),
  // price: parseFloat(faker.commerce.price()),
  // image: faker.helpers.shuffle([
  //   faker.image.avatar(),
  //   faker.image.avatar(),
  //   faker.image.avatar(),
  //   faker.image.avatar(), // extra for randomness
  //   faker.image.avatar()
  // ]).slice(0, 3),
  // createdAt: new Date(),
  // color: faker.helpers.shuffle([
  //   faker.color.rgb(),
  //   faker.color.rgb(),
  //   faker.color.rgb(),
  //   faker.color.rgb(), // extra for uniqueness
  //   faker.color.rgb()
  // ]).slice(0, 3),
  // size: faker.helpers.shuffle(['S', 'M', 'L', 'XL']).slice(0, 3)    }))
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