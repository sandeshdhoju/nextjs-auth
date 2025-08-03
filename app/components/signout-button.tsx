"use client"
import { signOut } from "next-auth/react"
 
export function SignOut() {
  return <button className="secondaryButton" onClick={() => signOut()}>Sign Out</button>

}