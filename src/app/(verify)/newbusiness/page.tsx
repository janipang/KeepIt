"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    router.push("/success");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400">
      <h1 className="text-2xl font-extrabold">NEW BUSINESS</h1>
      <div className="flex flex-col items-start">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="businessId"
            type="text"
            placeholder="business id"
            required
          />
          <input name="taxNumber" type="text" placeholder="tax number" required />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
