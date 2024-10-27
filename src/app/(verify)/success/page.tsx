'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';
import Image from 'next/image';

export default function Success() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center p-8 gap-8 m-auto w-4/5 h-2/3 md:w-1/2 md:h-3/4 bg-white/70 backdrop-blur-sm rounded-2xl ">
      <h1 className="text-2xl font-extrabold">Create Business Success</h1>
      <Image src="/success.jpg" width={400} height={300} alt="user_profile" />
      <Button
        onClick={() => {
          router.push('/home');
        }}
      >
        เริ่มต้นใช้งาน
      </Button>
    </div>
  );
}
