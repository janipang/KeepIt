"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Enterprise from "@/types/Enterprise";
import { getCookie } from "@/services/cookie";
import { postEnterprise } from "@/services/enterprise";
import { Input } from "@nextui-org/input";

export default function Welcome() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const enterprise: Enterprise = {
      registrationNumber: formData.get("registrationNumber") as string,
      taxId: formData.get("taxId") as string,
      name: formData.get("name") as string,
      ownerId: getCookie("userId") as string,
      documentArchiveId: "",
      AdminId: [],
    };
    const new_enterprise = await postEnterprise(enterprise);
    if (new_enterprise) {
      router.push("/success");
    } else {
      alert("update profile failed");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400">
      <h1 className="text-2xl font-extrabold">NEW BUSINESS</h1>
      <div className="flex flex-col items-start">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            name="registrationNumber"
            size="md"
            type="text"
            label="registration number"
            isRequired
          />
          <Input name="taxId" size="md" type="text" label="tax Id" isRequired />
          <Input name="name" size="md" type="text" label="name" isRequired />
          <Input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
