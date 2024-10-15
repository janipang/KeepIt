import AnimatedDots from "@/components/animated-dots";

export default function LoadingPage() {
  return (
      <div className="h-screen w-screen box bg-gradient-primary opacity-light flex-row text-white text-4xl font-extrabold tracking-widest">
        <p>Loading</p>
        <AnimatedDots />
      </div>
  );
}
