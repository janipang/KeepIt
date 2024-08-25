"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { getCookie } from "@/service/cookie";
import { getUserById } from "@/service/verify";
import User from "@/type/User";

export default function Welcome() {
    const router = useRouter();
    const userId = getCookie("userId") as string
    const [user, setUser] = useState<User | null>(null);
    const fetchUser = async(userId: string) => {
      setUser(await getUserById(userId) as User);
    }
    fetchUser(userId);


  return <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400">
    <h1 className="text-2xl font-extrabold">WELCOME {user?.username}</h1>
    <Image src="/welcome.jpg" width={400} height={300} alt="user_profile"/>
    <Button onClick={() => {router.push("/newbusiness")}}>ยืนยันตัวตน</Button>
  </div>;
}