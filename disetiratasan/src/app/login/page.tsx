interface LoginProps { }
import { getServerSession } from "next-auth";
import CollectionForm from "@/app/login/CollectionForm"
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Home(){
    const session = await getServerSession(authOptions)

    return (
        <div>
            <p>Hello World</p>
            <pre>{JSON.stringify(session)}</pre>
        </div>
    );
};
