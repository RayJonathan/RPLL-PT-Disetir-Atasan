import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    const password = await hash('test', 12)

    const user = await prisma.users.upsert(
    {
        where: { Email: 'test@test.com' },
        update: {},
        create: {
            Id: "US01",
            Email: "test@test.com",
            Password: password,
            FirstName: "rayjo",
            LastName: "jonathan",
            Number: "089",
            Country: "Indonesia",
            Region: "Jawa Barat",
            City: "Bandung",
            Address: "Taman"
        }
    })
    
    console.log(user)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })