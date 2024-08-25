"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUserByUsername } from "@/service/verify";
import { Button } from "@nextui-org/button";
import { setCookie } from "@/service/cookie";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onLogin = async() => {
    if (password == ""){
      alert("enter password");
      return;
    }
    const user = await getUserByUsername(username);
    if (!user){
      alert("user not found");
      return;
    }
    if (username == user.username) {
      if (password == user.password) {
        // login succcess logic here
        setCookie("userId", user.id as string);
        setCookie("profileId", user.profileId as string);
        router.push("/home")
      } else {
        alert("password is not correct!, please try again");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-auto w-4/5 h-2/3 md:w-1/2 md:h-3/4 bg-blue-400">
      <div className="p-4 my-4">Login</div>
      <div className="flex flex-col items-center gap-4">
        <input placeholder="username" value={username} onChange={e => {setUsername(e.target.value)}} required></input>
        <input placeholder="password" value={password} onChange={e => {setPassword(e.target.value)}} required></input>
        <Button onClick={() => onLogin()}>Login</Button>
      </div>
      <div className="p-4 my-4">Or You Want To Sign Up</div>
      <div className="flex flex-col items-start">
        <Button onClick={() => router.push("/signup")}>SignUp</Button>
      </div>
    </div>
  );
}
