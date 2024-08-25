"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
    const router = useRouter();

  return <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400">
    <h1 className="text-2xl font-extrabold">HOME</h1>
  </div>;
}