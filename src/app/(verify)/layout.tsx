import Circle from '@/components/circle';

export default function VerifyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen items-center justify-center p-5 w-screen overflow-x-hidden">
      <div className="absolute left-0 top-0 h-full w-full overflow-scroll">
        <div className="relative h-full min-h-screen w-full">
          <Circle
            diameter="800px"
            className="absolute bg-gradient-sunshine opacity-75 top-[10vh] left-[20vw] blur-lg animate-fade scale-x-[-1]"
          />
          <Circle
            diameter="950px"
            className="absolute bg-gradient-primary opacity-60 top-[140vh] left-[0vw] blur-lg animate-fade scale-y-[-1] scale-x-[-1]"
          />
          <Circle
            diameter="300px"
            className="absolute bg-gradient-sweet opacity-60 top-[70vh] left-[90vw] blur-lg animate-fade scale-x-[-1]"
          />
        </div>
      </div>
      {children}
    </div>
  );
}
