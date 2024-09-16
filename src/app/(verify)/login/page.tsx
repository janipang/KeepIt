"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { getUserByUsername } from "@/services/verify";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { setCookie } from "@/services/cookie";

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    if (password == "") {
      alert("enter password");
      return;
    }
    const user = await getUserByUsername(username);
    if (!user) {
      alert("user not found");
      return;
    }
    if (username == user.username) {
      if (password == user.password) {
        // login succcess logic here
        setCookie("userId", user.id as string);
        setCookie("profileId", user.profileId as string);
        router.push("/home");
      } else {
        alert("password is not correct!, please try again");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-auto w-4/5 h-2/3 md:w-1/2 md:h-3/4">
      <div className="p-4 my-4">Login</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <Input
          name="username"
          size="md"
          type="text"
          label="username"
          isRequired
        />
        <Input
          name="password"
          size="md"
          type="text"
          label="password"
          isRequired
        />
        <Input type="submit" value="Submit" />
      </form>
      <div className="p-4 my-4">Or You Want To Sign Up</div>
      <div className="flex flex-col items-start">
        <Button onClick={() => router.push("/signup")}>SignUp</Button>
      </div>
    </div>
  );
}
