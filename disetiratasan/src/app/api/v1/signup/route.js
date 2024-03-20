import prisma from "@/libs/prisma";

export async function POST(request) {
    const {email, password, firstname, lastname, phone, country, region, city, address, zipcode } = await request.json();
    const data = {email, password, firstname, lastname, phone, country, region, city, address, zipcode}
    const createUser =  await prisma.User.create({data});
    
    if (!createUser) return Response.json({status:500, isCreated : false}) 
    else return Response.json({status:200, isCreated:true})
}