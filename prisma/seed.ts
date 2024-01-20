import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.upsert({
        where:{nama:'tes'},
        update:{},
        create:{
            nama:'tes',
            email:'example@gmail.com'
        }
    });

}
main()  
    .catch((e)=>{
        console.log(e)
        process.exit(1);
    })
    .finally(async()=>{
        await prisma.$disconnect();
    })

