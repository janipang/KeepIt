"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function Welcome() {
    const router = useRouter();
//   const params = useParams<{ username: string }>();
//   const username = params.username;

  return <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400">
    <h1 className="text-2xl font-extrabold">WELCOME</h1>
    <Image src="/welcome.jpg" width={400} height={300} alt="user_profile"/>
    <button onClick={() => {router.push("")}}>สร้างกิจการ</button>
  </div>;
}