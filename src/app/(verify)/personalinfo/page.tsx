"use client";
import React, { FormEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import { putProfile } from "@/service/verify";
import Profile from "@/type/Profile";
import { getCookie } from "@/service/cookie";
import { Input } from "@nextui-org/input";

export default function PersonalInfo() {
  const router = useRouter();
  const profileId = getCookie("profileId") as string;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const profile: Profile = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      picture: formData.get("picture") as string | undefined,
      phone: formData.get("phone") as string,
      role: formData.get("role") as string,
    };
    const new_profile = await putProfile(profileId, profile);
    if (new_profile){
      router.push("/welcome")
    }
    else{
      alert("update profile failed")
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-auto w-4/5 h-2/3 md:w-1/2 md:h-3/4 bg-blue-400">
      <div className="p-4 my-4">Your Profile</div>
      <div className="flex flex-col items-start">
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <Input name="firstName" size="md" type="text" label="firstname" isRequired/>
          <Input name="lastName" size="md" type="text" label="lastName" isRequired/>
          <Input name="picture" size="md" type="text" label="picture" isRequired/>
          <Input name="phone" size="md" type="text" label="phone" isRequired/>
          <Input name="role" size="md" type="text" label="role" isRequired/>
          <Input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
