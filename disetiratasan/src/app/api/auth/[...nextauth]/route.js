import NextAuth from "next-auth"
import githubAUth from "next-auth/providers/github"

const authOption ={
    providers: [
        
    ],
    secret: process.env.NEXTAUTH_SECRET
}


const handler = NextAuth(authOption)

export {handler as GET, handler as POST}