'use client';
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { getUserByUsername, postLogin } from '@/services/verify';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { removeAllCookies, setCookie } from '@/services/cookie';
import Link from 'next/link';

export default function Login() {
  removeAllCookies();
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
      setCookie('username', username);
      router.push('/select-workspace');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-8 gap-8 m-auto w-4/5 h-2/3 md:w-1/2 md:h-3/4 bg-white/70 backdrop-blur-sm rounded-2xl ">
      <h1 className="p-4 text-heading">เข้าสู่ระบบ</h1>
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
            type="password"
            label="password"
            variant="bordered"
            isRequired
          />
          <Button type="submit" color="primary" className="text-lg w-full">
            เข้าสู่ระบบ
          </Button>
        </form>
        <div className="p-4 my-4 flex justify-end gap-2 w-full">
          <p>{"ยังไม่มีบัญชีผู้ใช้?"}</p>
          <Link href="/signup" className="text-primary underline">
            {' '}
            ลงทะเบียน
          </Link>
        </div>
      </div>
    </div>
  );
}
