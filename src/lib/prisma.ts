import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@/generated/prisma/client'

// ─── Singleton pattern ────────────────────────────────────────────────────────
// In development, Next.js hot-reloads modules on every save. Without this,
// each reload would create a new PrismaClient + a new connection pool,
// quickly exhausting Neon's connection limit.
// Storing the instance on `globalThis` ensures it survives hot-reloads.
// In production, hot-reload doesn't happen, so we just create it once normally.
// ─────────────────────────────────────────────────────────────────────────────

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({ adapter })
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
