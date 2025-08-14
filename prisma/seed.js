import { readFileSync } from 'node:fs';
import { PrismaClient } from '@prisma/client';

const products = JSON.parse(
  readFileSync(new URL('./products.json', import.meta.url))
);

const prisma = new PrismaClient();

async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
