import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as { prisma?: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  globalForPrisma.prisma = prisma
}
