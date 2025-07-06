// Example database schema (using Prisma)

// This would be in your schema.prisma file:
/*
model Trip {
  id            String   @id @default(cuid())
  destinations  String[]
  startDate     DateTime
  endDate       DateTime
  travelers     Int
  budget        String
  travelStyle   String
  accommodation String
  transport     String
  interests     String[]
  services      Json
  personalInfo  Json
  specialRequests String?
  status        String   @default("pending")
  itinerary     Json?
  totalCost     Float?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  @@map("trips")
}

model Quote {
  id           String   @id @default(cuid())
  personalInfo Json
  tripDetails  Json
  services     Json
  requirements String?
  status       String   @default("pending")
  response     String?
  estimatedCost Float?
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  
  @@map("quotes")
}

model Contact {
  id        String   @id @default(cuid())
  name      String
  email     String
  subject   String
  message   String
  status    String   @default("unread")
  response  String?
  createdAt DateTime @default(now())
  
  @@map("contacts")
}
*/

// Database connection example
import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db
