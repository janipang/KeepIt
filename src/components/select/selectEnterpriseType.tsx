"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { useEffect, useState } from "react";
import { Selection } from "@react-types/shared";
import { BusinessType } from "@/types/enum";

interface Props {
  onValueChange: (value: BusinessType) => void;
}

export default function SelectEnterpriseType({ onValueChange }: Props) {
  const [value, setValue] = useState<Selection>(new Set());

  useEffect(() => {
    onValueChange(
      value === undefined
        ? BusinessType.COOPERATE
        : value === "all"
        ? BusinessType.COOPERATE
        : value.size
        ? ((value.entries().next().value?.[0] as BusinessType) ?? "")
        : BusinessType.COOPERATE
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const options = [
    { key: BusinessType.COOPERATE, label: "นิติบุคคล" },
    { key: BusinessType.INDIVIDUAL, label: "บุคคล" },
  ];
  return (
    <Select
      label="ประเภทกิจการ"
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
