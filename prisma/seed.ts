import { prisma } from "./prisma";
import { data } from "../data";

async function main() {
  try {
    await prisma.course.create({
      data: data[0].data,
    });
  } catch (error) {
    console.log(error);
  }
}

main()
  .catch((e) => {
    console.error("Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
