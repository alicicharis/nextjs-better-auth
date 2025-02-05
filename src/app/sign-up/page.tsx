import SignUp from "@/components/sign-up";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";

export default async function SignUpPage() {
  const sessionData = await getSession();

  if (sessionData?.session) {
    redirect("/");
  }

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-medium">Sign up</h1>
      <SignUp />
    </main>
  );
}
