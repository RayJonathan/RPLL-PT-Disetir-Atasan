import prisma from "@/libs/prisma";

export async function POST(request) {
    const { email, password } = await request.json();
    const user = await prisma.User.findUnique({
        where: { email: email }
        
    });

    if (!user || user.password !== password) {
        console.log("MASUK WOI BERHASIL")
        return Response.json({ status: 401, isAuthenticated: false });
    } else {
        return Response.json({ status: 200, isAuthenticated: true });
    }
}
