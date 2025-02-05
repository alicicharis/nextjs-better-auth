"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    const { data, error } = await authClient.signIn.email(
      { email, password },
      {
        onRequest: (ctx) => console.log("Ctx: ", ctx),
        onSuccess: (ctx) => console.log("Success: ", ctx),
        onError: (ctx) => console.log("Error: ", ctx),
      }
    );

    console.log("Data: ", data);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-black"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="text-black"
      />
      <button onClick={signIn}>Sign in</button>
    </div>
  );
};

export default SignIn;
