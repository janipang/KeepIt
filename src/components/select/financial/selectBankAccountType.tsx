'use client';

import { Select, SelectItem } from '@nextui-org/select';
import { useEffect, useState } from 'react';
import { Selection } from '@react-types/shared';

interface Props {
  onValueChange: (value: string) => void;
}

export default function SelectBankAccountType({ onValueChange }: Props) {
  const [value, setValue] = useState<Selection>(new Set());

  useEffect(() => {
    onValueChange(
      value === undefined
        ? ''
        : value === 'all'
          ? 'all'
          : value.size
            ? ((value.entries().next().value?.[0] as string) ?? '')
            : ''
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const options = [
    { key: 'บัญชีกระเเสรายวัน', label: 'บัญชีกระเเสรายวัน' },
    { key: 'บัญชีออมทรัพย์', label: 'บัญชีออมทรัพย์' },
    { key: 'บัญชีเงินฝากประจำ', label: 'บัญชีเงินฝากประจำ' },
  ];

  return (
    <Select
      name="accountType" //didn't use but to make it semantic
      label="ประเภทบัญชี"
      variant="bordered"
      placeholder="ไม่มี"
      onSelectionChange={setValue}
      selectedKeys={value}
      isRequired
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
}
