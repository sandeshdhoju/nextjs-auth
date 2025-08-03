import { auth } from "@/app/auth"
import { SignOut } from "../components/signout-button";
import Image from "next/image";
import Link from "next/link";

export default async function Dashboard() {

    const session = await auth();

    if (!session) return <div className="text-red-600 text-center">
        <p className="p-8">Not Authenticated...</p>
        <Link href={"/"} className="primaryButton">Go to Login Page</Link>
        </div>
    return (
        <div className="text-center m-3">
            <span className="inline-block"><Image src={session?.user?.image ?? ''} height={50} width={50} alt="Profile Picture" /></span>
            <p>Wellcome <b>{session?.user?.name}</b>.</p>
            <p>Your Email address is <b>{session?.user?.email}</b>.</p>
            <SignOut />
        </div>
    )
}