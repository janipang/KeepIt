'use client';
import React, { FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { postRegister, putProfile } from '@/services/verify';
import Profile from '@/types/Profile';
import { getCookie, setCookie } from '@/services/cookie';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/react';

export default function PersonalInfo() {
  const router = useRouter();
  // const profileId = getCookie("profileId") as string;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = getCookie('new_email');
    const username = getCookie('new_username');
    const password = getCookie('new_password');
    const profile: Profile = {
      title: formData.get('title') as string,
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      picture: formData.get('picture') as string | undefined,
      phone: formData.get('phone') as string,
    };

    // check from cookie
    if (email && username && password) {
      const accessToken = await postRegister(
        email,
        username,
        password,
        profile
      );
      if (accessToken) {
        setCookie("accessToken", accessToken);
        router.push('/newbusiness');
      } else {
        alert('update profile failed');
      }
    } else {
      router.push('/signup');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-8 gap-8 m-auto w-4/5 h-2/3 md:w-1/2 md:h-3/4 bg-white/70 backdrop-blur-sm rounded-2xl ">
      <div className="p-4 my-4 text-heading">Your Profile</div>
      <div className="lex flex-col items-start gap-4 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 w-full"
        >
          {/* <Input name="title" size="md" type="text" label="title" isRequired /> */}
          <Input
            name="title"
            size="md"
            type="text"
            label="title"
            isRequired
          />
          <Input
            name="firstName"
            size="md"
            type="text"
            label="firstname"
            isRequired
          />
          <Input
            name="lastName"
            size="md"
            type="text"
            label="lastName"
            isRequired
          />
          <Input
            name="picture"
            size="md"
            type="text"
            label="picture"
            isRequired
          />
          <Input name="phone" size="md" type="text" label="phone" isRequired />
          <Button type="submit" color="primary" className="text-lg w-full mt-4">
            บันทึกข้อมูล
          </Button>
        </form>
      </div>
    </div>
  );
}
