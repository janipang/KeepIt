"use client"
import { Select, SelectItem } from "@nextui-org/select";
import { useEffect, useState } from "react";


interface Props {
  onValueChange: (value: string) => void;
  onErrorChange: (error: boolean) => void;
}

export default function SelectContact({ onValueChange, onErrorChange }: Props) {
  const [value, setValue] = useState<string>("all");
  const [error, setError] = useState<boolean>(false);
  const isValid = value === "all";

  useEffect(() => {
    onValueChange(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  useEffect(() => {
    onErrorChange(error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  const options = [
    { key: "all", label: "ทั้งหมด" },
    { key: "customer", label: "ลูกค้า" },
    { key: "provider", label: "ผู้ขาย" },
  ];
  return (
    <Select
      label="ประเภทผู้ติดต่อ"
      variant="bordered"
      errorMessage="โปรดเลือกผู้ติดต่อ"
      isInvalid={isValid ? false : true}
      selectedKeys={value}
      defaultSelectedKeys="all"
      className="max-w-xs"
      onSelectionChange={() => setValue}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
}
