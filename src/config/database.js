import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing from the .env file");
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "info", "warn", "error"]
      : ["warn", "error"],
});

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to PostgreSQL successfully via Prisma.");
  } catch (error) {
    console.error("Failed to connect to PostgreSQL:", error);
    throw error;
  }
};

const disconnectDB = async () => {
  await prisma.$disconnect();
  console.log("Disconnected from PostgreSQL.");
};

export { connectDB, disconnectDB, prisma };