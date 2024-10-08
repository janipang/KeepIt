"use client";
import { Select, SelectItem } from "@nextui-org/select";
import { useEffect, useState } from "react";
import { Selection } from "@react-types/shared";

interface Props {
  onValueChange: (value: string) => void;
}

export default function SelectContactGroup({
  onValueChange,
}: Props) {
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
    { key: "customer", label: "ลูกค้า" },
    { key: "provider", label: "ผู้ขาย" },
  ];
  return (
    <Select
      label="ประเภทผู้ติดต่อ"
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
