"use client"
import { signIn } from "next-auth/react"
 
export function SignIn() {
  return (
    <button className="primaryButton" onClick={() => signIn("github", { redirectTo: "/dashboard" })}>
      Sign In with GitHub
    </button>
  )
}