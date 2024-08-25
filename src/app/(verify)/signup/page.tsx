"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import User from "@/type/User";
import { useRouter } from "next/navigation";
import { postUser, checkUserValid } from "@/service/verify";
import { setCookie } from "@/service/cookie";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const onSignUp = async () => {
    if (password != confirmPassword){
      alert("please make sure to confirm password!")
      return;
    }

    if (await (checkUserValid(username)) === false){
      const user = await postUser(username, password);
      if (user){
        //sign up success logic here
        setCookie("userId", user.id as string);
        setCookie("profileId", user.profileId as string);
        router.push("/personalinfo")
      }
      else{
        alert("create user error")
      }
    }
    else{
      alert("this username already choosed!")
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-auto w-4/5 h-2/3 md:w-1/2 md:h-3/4 bg-blue-400">
      <div className="p-4 my-4">SignUp</div>
      <div className="flex flex-col items-center gap-4">
        <input placeholder="username" value={username} onChange={e => {setUsername(e.target.value)}}></input>
        <input placeholder="password" value={password} onChange={e => {setPassword(e.target.value)}}></input>
        <input placeholder="confirm password" value={confirmPassword} onChange={e => {setConfirmPassword(e.target.value)}}></input>
        <Button onClick={() => onSignUp()}>SignUp</Button>
      </div>
    </div>
  );
}
