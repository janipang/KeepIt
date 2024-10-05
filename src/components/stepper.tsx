import { Button } from "@nextui-org/button";

interface Props{
    data: string[];
}

export default function Stepper({data} :Props) {
  return (
    <div className="w-full flex flex-row gap-12">
      {data.map((text, index) => (
        <Button
          key={index}
          size="lg"
          radius="sm"
          color="primary"
          variant="faded"
        >
          {text}
        </Button>
      ))}
    </div>
  );
}
