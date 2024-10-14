import Circle from "@/components/circle"

export default function AnimatedDots() {
  return (
    <div className="ml-2 flex items-center gap-1">
      <div className="relative w-2.5">
        <Circle
          diameter="10px"
          className="-translate-y-0 translate-x-0 animate-loadingDots1 bg-gradient-primary"
        />
      </div>
      <div className="relative w-2.5">
        <Circle
          diameter="10px"
          className="-translate-y-0 translate-x-0 animate-loadingDots2 bg-gradient-sweet"
        />
      </div>
      <div className="relative w-2.5">
        <Circle
          diameter="10px"
          className="-translate-y-0 translate-x-0 animate-loadingDots3 bg-gradient-sunshine"
        />
      </div>
    </div>
  );
}
