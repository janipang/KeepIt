"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { useEffect, useState } from "react";
import { Selection } from "@react-types/shared";
import { ContactType } from "@/types/enum";

interface Props {
  onValueChange: (value: ContactType | "") => void;
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
        ? ""
        : value.size
        ? ((value.entries().next().value?.[0] as ContactType) ?? "")
        : ""
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const options = [
    { key: ContactType.CLIENT, label: "ลูกค้า" },
    { key: ContactType.SUPPLIER, label: "ผู้ขาย" },
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
