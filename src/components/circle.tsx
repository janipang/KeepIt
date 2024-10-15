import { cn } from "@/lib/utils";

type Props = {
  diameter: string;
  className?: string;
};

export default function Circle({ diameter, className }: Props) {
  return (
    <div
      style={{
        width: `${diameter}`,
      }}
      className={cn(
        `aspect-square origin-center -translate-x-1/2 -translate-y-1/2 rounded-full`,
        className,
      )}
    ></div>
  );
}
