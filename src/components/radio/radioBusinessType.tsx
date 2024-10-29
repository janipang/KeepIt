import { BusinessType } from "@/types/enum";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useState } from "react";

interface Props {
  onValueChange: (value: BusinessType) => void;
}

export default function RadioBusinessType({
    onValueChange,
  }: Props) {
    const [value, setValue] = useState<BusinessType>(BusinessType.COOPERATE);
  return (
    <RadioGroup
      color="secondary"
      defaultValue={BusinessType.COOPERATE}
      orientation="horizontal"
      value={value}
      onValueChange={(val: string) => {
        setValue(val as BusinessType);
        onValueChange(val as BusinessType);
      }}
    >
      <Radio value={BusinessType.COOPERATE}>นิติบุคคล</Radio>
      <Radio value={BusinessType.INDIVIDUAL}>บุคคล</Radio>
    </RadioGroup>
  );
}
