import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserActionButton = async () => {
    const user = await authUserSession();
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/login"
    const myAccount = user ? "My Account" : ""
    const myAccountURL = user ? "/" : ""

    return (
        <div className="flex gap-4">
            <Link href={myAccountURL} className="">{myAccount}</Link>
            <Link href={actionURL} className="">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton