'use client';

import { Select, SelectItem } from '@nextui-org/select';
import { useEffect, useState } from 'react';
import { Selection } from '@react-types/shared';

interface Props {
  onValueChange: (value: string) => void;
}

export default function SelectEWalletProviderType({ onValueChange }: Props) {
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
    { key: 'ผู้ให้บริการรับชำระเงิน', label: 'ผู้ให้บริการรับชำระเงิน' },
    { key: 'e-commerce', label: 'e-commerce' },
  ];

  return (
    <Select
      name="providerType" //didn't use but to make it semantic
      label="รูปแบบผู้ให้บริการ"
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
