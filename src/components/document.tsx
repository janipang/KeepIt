import { ReactNode } from 'react';

interface DocumentProps {
  children: ReactNode;
}

export default function Document({ children }: DocumentProps) {
  return (
    <div className="bg-white rounded-md shadow-lg flex flex-col min-w-[600px] p-6 w-[140vw] scale-[0.67] md:w-[120vw] md:scale-[0.78] lg:w-full lg:scale-100">
      {children}
    </div>
  );
}