'use client';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({}: Props) {
  return (
    <div className="h-screen w-screen box bg-gradient-primary opacity-light flex-row text-white text-4xl font-extrabold tracking-widest">
      <p>Error!</p>
    </div>
  );
}
