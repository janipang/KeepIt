"use client";
import React, { FormEvent } from "react";
import { Input } from "@nextui-org/input";
import { useRouter } from 'next/navigation';
import { postUser, checkUserValid } from "@/services/verify";
import { getCookie, setCookie } from "@/services/cookie";

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string
    const password = formData.get("password") as string
    const confirmPassword = formData.get("confirmPassword") as string
    if (password != confirmPassword){
      alert("please make sure to confirm password!")
      return;
    }
    if (await (checkUserValid(username)) === false){
      const user = await postUser(username, password);
      if (user){
        //sign up success logic here
        setCookie("userId", user.id as string);
        console.log(user.id)
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
    <div className="flex flex-col justify-center items-center m-auto w-4/5 h-2/3 md:w-1/2 md:h-3/4">
      <div className="p-4 my-4">SignUp</div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <Input name="username" size="md" type="text" label="username" isRequired/>
          <Input name="password" size="md" type="text" label="password" isRequired/>
          <Input name="confirmPassword" size="md" type="text" label="confirm password" isRequired/>
          <Input type="submit" value="Submit" />
      </form>
    </div>
  );
}
