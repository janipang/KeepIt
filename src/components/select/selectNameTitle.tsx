"use client";
import { Select, SelectItem } from "@nextui-org/select";
import { useEffect, useState } from "react";
import { Selection } from "@react-types/shared";
import { NameTitle } from "@/types/enum";

interface Props {
  onValueChange: (value: NameTitle) => void;
}

export default function SelectNameTitle({ onValueChange }: Props) {
  const [value, setValue] = useState<Selection>(new Set());

  useEffect(() => {
    onValueChange(
      value === undefined
        ? NameTitle.NOT_SPECIFIED
        : value === "all"
        ?  NameTitle.FEMALE
        : value.size
        ? ((value.entries().next().value?.[0] as NameTitle) ?? "")
        : NameTitle.NOT_SPECIFIED
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const options = [
    { key: NameTitle.MALE, label: "นาย" },
    { key: NameTitle.FEMALE, label: "นาง" },
    { key: NameTitle.SINGLE_FEMALE, label: "นางสาว" },
    { key: NameTitle.NOT_SPECIFIED, label: "ไม่ระบุ" },
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
