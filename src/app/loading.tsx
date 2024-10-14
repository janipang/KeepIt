import AnimatedDots from "@/components/animated-dots";

export default function LoadingPage() {
  return (
      <div className="box bg-gradient-primary opacity-light flex-row text-white text-4xl font-extrabold tracking-widest h-full">
        <p>Loading</p>
        <AnimatedDots />
      </div>
  );
}
