import { RadioGroup, Radio } from "@nextui-org/react";
import { useState } from "react";

interface Props {
  onValueChange: (value: "cash" | "bankaccount" | "e-wallet") => void;
}

export default function RadioFinancialChannel({
    onValueChange,
  }: Props) {
    const [value, setValue] = useState<"cash" | "bankaccount" | "e-wallet">("bankaccount");
  return (
    <RadioGroup
      color="secondary"
      defaultValue="london"
      orientation="horizontal"
      value={value}
      onValueChange={(val: string) => {
        setValue(val as "cash" | "bankaccount" | "e-wallet");
        onValueChange(val as "cash" | "bankaccount" | "e-wallet");
      }}
    >
      <Radio value="cash">เงินสด</Radio>
      <Radio value="bankaccount">ธนาคาร</Radio>
      <Radio value="e-wallet">e-wallet</Radio>
    </RadioGroup>
  );
}
