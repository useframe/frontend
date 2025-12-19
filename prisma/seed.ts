import { PrismaClient, Prisma } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          content: "https://pris.ly/discord",
          published: true,
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
        },
      ],
    },
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://www.twitter.com/prisma",
          published: true,
        },
      ],
    },
  },
];

export async function main() {
  console.log("🌱 Starting seed...");

  try {
    for (const u of userData) {
      // Use upsert to make seed idempotent (safe to run multiple times)
      const user = await prisma.user.upsert({
        where: { email: u.email },
        update: {
          name: u.name,
          // Update posts if they exist
          posts: {
            deleteMany: {}, // Clear existing posts
            create: u.posts?.create || [],
          },
        },
        create: u,
      });

      console.log(`✅ User ${user.email} seeded`);
    }

    console.log("✨ Seed completed successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();
