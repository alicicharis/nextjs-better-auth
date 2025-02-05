"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import Link from "next/link";

export default function Home() {
  const signOutHandler = async () => {
    const res = await signOut();

    console.log("Res: ", res);
  };

  return (
    <main className="flex justify-center items-center h-screen gap-2">
      <Link href="/sign-in">
        <Button>Sign in</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Sign up</Button>
      </Link>
      <Button onClick={signOutHandler}>Sign out</Button>
    </main>
  );
}
