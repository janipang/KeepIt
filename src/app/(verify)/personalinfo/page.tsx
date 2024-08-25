"use client";
import React, { FormEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import { putProfile } from "@/service/verify";
import Profile from "@/type/Profile";
import { getCookie } from "@/service/cookie";

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
          <input
            name="firstName"
            type="text"
            placeholder="firstname"
            required
          />
          <input name="lastName" type="text" placeholder="lastname" required />
          <input name="picture" type="text" placeholder="picture" required />
          <input name="phone" type="text" placeholder="phone" required />
          <input name="role" type="text" placeholder="role" required />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
