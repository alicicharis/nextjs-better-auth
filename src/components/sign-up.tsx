"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const signUp = async () => {
    const { data, error } = await authClient.signUp.email(
      {
        email,
        password,
        name,
        image: image ? undefined : undefined,
      },
      {
        onRequest: (ctx) => {
          console.log("Ctx: ", ctx);
          //show loading
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard
          console.log("Success: ", ctx);
        },
        onError: (ctx) => {
          console.log("Error: ", ctx);
          alert(ctx.error.message);
        },
      }
    );
  };

  return (
    <div>
      <input
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="text-black"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="text-black"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="text-black"
      />
      <input
        type="file"
        onChange={(e) => setImage(e?.target?.files?.[0] ?? null)}
      />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}
