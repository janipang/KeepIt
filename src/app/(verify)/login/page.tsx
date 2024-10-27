'use client';
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { getUserByUsername, postLogin } from '@/services/verify';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { setCookie } from '@/services/cookie';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    if (!username) {
      alert('please enter username or email');
      return;
    } else if (!password) {
      alert('please enter password');
      return;
    }

    const accessToken = await postLogin(username, password);
    if (accessToken) {
      // login succcess logic here
      setCookie('accessToken', accessToken as string);
      router.push('/home');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-8 gap-8 m-auto w-4/5 h-2/3 md:w-1/2 md:h-3/4 bg-white/70 backdrop-blur-sm rounded-2xl ">
      <p className="p-4 text-heading">Login</p>
      <div className="lex flex-col items-center gap-4 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 w-full"
        >
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
            type="text"
            label="password"
            variant="bordered"
            isRequired
          />
          <Button type="submit" color="primary" className="text-lg w-full">
            Login
          </Button>
        </form>
        <div className="p-4 my-4 flex justify-end gap-2 w-full">
          <p>{"Didn't have an account?"}</p>
          <Link href="/signup" className="text-primary underline">
            {' '}
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
