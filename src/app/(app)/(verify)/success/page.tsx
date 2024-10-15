"use client";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Success() {
    const router = useRouter();

  return <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400">
    <h1 className="text-2xl font-extrabold">Create Business Success</h1>
    <Image src="/success.jpg" width={400} height={300} alt="user_profile"/>
    <Button onClick={() => {router.push("/home")}}>เริ่มต้นใช้งาน</Button>
  </div>;
}