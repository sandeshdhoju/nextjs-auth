import {SignIn} from "./components/signin-button";
import {auth} from "@/app/auth"
import { SignOut } from "./components/signout-button";

export default async function Home() {
  const session = await auth();
  console.log(session)
  return (
    <div className="items-center justify-items-center text-center min-h-screen p-8 pb-20 gap-16 sm:p-20">     
        {session?.user?<SignOut />:<SignIn />}
    </div>
  );
}
