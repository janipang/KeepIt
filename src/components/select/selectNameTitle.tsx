"use client";
import { Select, SelectItem } from "@nextui-org/select";
import { useEffect, useState } from "react";
import { Selection } from "@react-types/shared";

interface Props {
  onValueChange: (value: string) => void;
}

export default function SelectNameTitle({ onValueChange }: Props) {
  const [value, setValue] = useState<Selection>(new Set());

  useEffect(() => {
    onValueChange(
      value === undefined
        ? ""
        : value === "all"
        ? "all"
        : value.size
        ? ((value.entries().next().value?.[0] as string) ?? "")
        : ""
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const options = [
    { key: "นาย", label: "นาย" },
    { key: "นาง", label: "นาง" },
    { key: "นางสาว", label: "นางสาว" },
    { key: "ไม่ระบุ", label: "ไม่ระบุ" },
  ];
  return (
    <Select
      label="คำนำหน้าชื่อ"
      variant="bordered"
      onSelectionChange={setValue}
      selectedKeys={value}
      className="max-w-xs"
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
}
