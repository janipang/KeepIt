import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'accent' | 'light' | 'outline';

interface Props {
  title: string;
  amount: number;
  unit: string;
  variant?: Variant;
  className?: 'string';
}

const variantClasses = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  light: 'bg-accent-light text-black',
  accent: 'bg-accent text-black',
  outline: 'border-2 border-accent text-black',
};

export default function BillBoard({
  title,
  amount,
  unit,
  variant = 'accent',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'w-full flex p-4 justify-between items-center rounded-lg',
        variantClasses[variant],
        className
      )}
    >
      <p>{title}</p>
      <span className="flex items-center gap-4">
        <p className="text-2xl font-semibold">{amount}</p>
        <p>{unit}</p>
      </span>
    </div>
  );
}
