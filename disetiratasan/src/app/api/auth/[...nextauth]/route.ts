import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },

    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                // Fix the types for email and password
                email: { label: 'Email', type: 'email   ', placeholder: 'hello@example.com' },
                password: { label: 'Password', type: 'password', placeholder:'input password'}
            },
            
            
            async authorize(credentials) {
                console.log("MASUK SINI GA WOI")
                // Correctly return a User object
                const user = { id: 1, name: 'Ethan', email: 'test@test.com' }
                return user
            }
        })
    ]
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
