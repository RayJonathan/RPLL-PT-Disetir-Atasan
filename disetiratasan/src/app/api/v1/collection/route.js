import prisma from "@/libs/prisma"
import { request } from "http"

export async function POST(email,password){
    const{email,password} = await request.json()
    const data = { email , password}
    const createCollection = await prisma.collection.create({ data })

    if(!createCollection) return Response.json({status : 500, isCreated: fakse})
    else return Response.json({status:200, isCreated:true})
    return Response.json({data:"HELLO!"})
}