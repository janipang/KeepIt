import { cn } from '@/lib/utils';
interface Props {
  className?: string;
}
export default function Loading({className}: Props) {
  return (
    <div
      className={cn(
        'flex justify-center items-center w-full h-full min-h-28 min-w-48 bg-white bg-opacity-60 rounded-md',
        className
      )}
    >
      <div className="loader"></div>
    </div>
  );
}
