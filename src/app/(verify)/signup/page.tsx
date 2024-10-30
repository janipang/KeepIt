'use client';
import React, { FormEvent } from 'react';
import { Input } from '@nextui-org/input';
import { useRouter } from 'next/navigation';
import { postUser, checkUserValid, postRegister } from '@/services/verify';
import { getCookie, setCookie } from '@/services/cookie';
import { Button } from '@nextui-org/react';

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password != confirmPassword) {
      alert('please confirm your password correctly!');
      return;
    }

    if ((await checkUserValid(email, username)) === true) {
      // username didn't picked
      //success logic here
      setCookie('new_email', email as string);
      setCookie('new_username', username as string);
      setCookie('new_password', password as string);
      router.push('/personalinfo');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-8 gap-8 m-auto w-4/5 h-2/3 md:w-1/2 md:h-3/4 bg-white/70 backdrop-blur-sm rounded-2xl animate-fade">
      <h1 className="p-4 my-4 text-heading">ลงทะเบียน</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-full"
      >
        <Input
          name="email"
          size="md"
          type="text"
          label="email"
          variant="bordered"
          isRequired
        />
        <Input
          name="username"
          size="md"
          type="text"
          label="username"
          variant="bordered"
          isRequired
        />
        <Input
          name="password"
          size="md"
          type="password"
          label="password"
          variant="bordered"
          isRequired
        />
        <Input
          name="confirmPassword"
          size="md"
          type="password"
          label="confirm password"
          variant="bordered"
          isRequired
        />
        <Button type="submit" color="primary" className="text-lg w-full mt-4">
          ลงทะเบียน
        </Button>
      </form>
    </div>
  );
}
