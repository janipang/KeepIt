'use client';

import { Select, SelectItem } from '@nextui-org/select';
import { useEffect, useState } from 'react';
import { Selection } from '@react-types/shared';
import { Avatar } from '@nextui-org/avatar';

interface Props {
  onValueChange: (value: string) => void;
}

export default function SelectBank({ onValueChange }: Props) {
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
    { key: 'ธ.กรุงเทพ', label: 'ธ.กรุงเทพ', logo: "/bank-logo/bangkok-bank.svg" },
    { key: 'ธ.กสิกรไทย', label: 'ธ.กสิกรไทย', logo: "/bank-logo/kasikorn-bank.svg" },
    { key: 'ธ.ไทยพานิชย์', label: 'ธ.ไทยพานิชย์', logo: "/bank-logo/scb-bank.svg" },
    { key: 'ธ.กรุงไทย', label: 'ธ.กรุงไทย', logo: "/bank-logo/krungthai-bank.svg" },
    { key: 'ธ.กรุงศรี', label: 'ธ.กรุงศรี', logo: "/bank-logo/krungsri-bank.svg" },
    { key: 'ธ.ออมสิน', label: 'ธ.ออมสิน', logo: "/bank-logo/government-bank.svg" },
  ];

  return (
    <Select
      name="bank" //didn't use but to make it semantic
      label="ธนาคาร"
      variant="bordered"
      placeholder="ไม่มี"
      onSelectionChange={setValue}
      selectedKeys={value}
      isRequired
    >
      {options.map((option) => (
        <SelectItem key={option.key} startContent={<Avatar alt={`${option.key}-logo`} className="w-6 h-6" src={option.logo} />}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}
