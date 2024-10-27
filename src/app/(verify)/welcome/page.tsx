'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { getCookie } from '@/services/cookie';
import { getUserById } from '@/services/verify';
import User from '@/types/User';

export default function Welcome() {
  const router = useRouter();
  const userId = getCookie('userId') as string;
  const [user, setUser] = useState<User | null>(null);
  const fetchUser = async (userId: string) => {
    setUser((await getUserById(userId)) as User);
  };
  fetchUser(userId);

  return (
    <div className="flex flex-col justify-center items-center p-8 gap-8 m-auto w-4/5 h-2/3 md:w-1/2 md:h-3/4 bg-white/70 backdrop-blur-sm rounded-2xl ">
      <h1 className="text-2xl font-extrabold">WELCOME {user?.username}</h1>
      <Image src="/welcome.jpg" width={400} height={300} alt="user_profile" />
      <Button
        onClick={() => {
          router.push('/newbusiness');
        }}
      >
        ยืนยันตัวตน
      </Button>
    </div>
  );
}
