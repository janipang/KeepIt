import { RadioGroup, Radio } from "@nextui-org/react";
import { useState } from "react";

interface Props {
  onValueChange: (value: string) => void;
}

export default function RadioHeadquarter({
    onValueChange,
  }: Props) {
    const [value, setValue] = useState<string>("");
  return (
    <RadioGroup
      label="Select your favorite city"
      color="secondary"
      defaultValue="london"
      orientation="horizontal"
      value={value}
      onValueChange={(val: string) => {
        setValue(val);
        onValueChange(val);
      }}
    >
      <Radio value="สำนักงานใหญ่">สำนักงานใหญ่</Radio>
      <Radio value="สาขา">สาขา</Radio>
      <Radio value="ไม่ระบุ">ไม่ระบุ</Radio>
    </RadioGroup>
  );
}
