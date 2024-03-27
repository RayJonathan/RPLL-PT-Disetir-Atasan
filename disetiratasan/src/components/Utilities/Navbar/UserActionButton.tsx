import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserActionButton = async() => {
    const user = await authUserSession();
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/login"

    return(
        <div>
            <Link href={actionURL}>{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton