'use client';
import React, { FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { postRegister, putProfile } from '@/services/verify';
import Profile from '@/types/Profile';
import { getCookie, removeCookie, setCookie } from '@/services/cookie';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/react';
import FileUpload from '@/components/fileUpload';
import { getFileURL } from '@/services/fileUpload';

export default function PersonalInfo() {
  const router = useRouter();
  // const profileId = getCookie("profileId") as string;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const logoFile = formData.get('logoFile') as File;
    let picture: string = "";
    if (logoFile){
      // picture = await getFileURL(logoFile);
      picture = "";
    }

    const email = getCookie('new_email');
    const username = getCookie('new_username');
    const password = getCookie('new_password');

    const profile: Profile = {
      title: formData.get('title') as string,
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      picture: picture as string,
      address: formData.get('address') as string,
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
        setCookie('accessToken', accessToken);
        setCookie('username', username);
        removeCookie("new_email");
        removeCookie("new_username");
        removeCookie("new_password");
        router.push('/select-workspace');
      } else {
        // alert('update profile failed');
      }
    } else {
      router.push('/signup');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-8 gap-8 m-auto w-4/5 h-2/3 md:w-1/2 md:h-3/4 bg-white/70 backdrop-blur-sm rounded-2xl animate-fade">
      <div className="p-4 my-4 text-heading">ข้อมูลส่วนตัว</div>
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
            label="คำนำหน้าชื่อ"
            variant="bordered"
            isRequired
          />
          <Input
            name="firstName"
            size="md"
            type="text"
            label="ชื่อจริง"
            variant="bordered"
            isRequired
          />
          <Input
            name="lastName"
            size="md"
            type="text"
            label="นามสกุล"
            variant="bordered"
            isRequired
          />
          <Input
            name="address"
            size="md"
            type="text"
            label="ที่อยู่"
            variant="bordered"
            isRequired
          />
          <Input
            name="phone"
            size="md"
            type="text"
            label="เบอร์โทรศัพท์"
            variant="bordered"
            isRequired
          />
            <FileUpload name="picture" accept="image/*" label="profile picture"/>
          <Button type="submit" color="primary" className="text-lg w-full mt-4">
            บันทึกข้อมูล
          </Button>
        </form>
      </div>
    </div>
  );
}
