import AnimatedDots from '@/components/animated-dots';

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-gradient-primary opacity-light flex flex-col justify-center items-center text-white text-4xl font-extrabold tracking-widest">
      <div className="flex gap-2 items-center">
      <p className="text-6xl">404! | </p>
      <div className="flex flex-row gap-2">
        <p>Not Found</p>
        <AnimatedDots />
      </div>
    </div></div>
  );
}
