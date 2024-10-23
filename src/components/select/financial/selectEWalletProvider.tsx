'use client';

import { Select, SelectItem } from '@nextui-org/select';
import { useEffect, useState } from 'react';
import { Selection } from '@react-types/shared';
import { Avatar } from '@nextui-org/react';

interface Props {
  providerType: string;
  onValueChange: (value: string) => void;
}

export default function SelectEWalletProvider({
  providerType,
  onValueChange,
}: Props) {
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

  let options = [ { key: '', label: 'ไม่พบข้อมูล', logo:""} ];

  switch (providerType) {
    case 'ผู้ให้บริการรับชำระเงิน':
      options = [
        { key: 'Omise', label: 'Omise', logo:"/e-wallet-logo/omise.svg" },
        { key: 'GBPrimePay', label: 'GBPrimePay', logo:"/e-wallet-logo/gb-pay.png" },
      ];
      break;
    case 'e-commerce':
      options = [
        { key: 'True Wallet', label: 'True Wallet', logo:"/e-wallet-logo/true-money.svg"},
        { key: 'LINE Pay/wePAY', label: 'LINE Pay/wePAY', logo:"/e-wallet-logo/line-pay.svg" },
        { key: 'PayPal', label: 'PayPal', logo:"/e-wallet-logo/paypal.svg" },
      ];
      break;
  }

  return (
    <Select
      name="provider" //didn't use but to make it semantic
      label="ผู้ให้บริการ"
      variant="bordered"
      placeholder="ไม่มี"
      onSelectionChange={setValue}
      selectedKeys={value}
      isRequired
    >
      {options.map((option) => (
        <SelectItem key={option.key} startContent={<Avatar alt={`${option.key}-logo`} className="w-6 h-6" src={option.logo} />}>{option.label}</SelectItem>
      ))}
    </Select>
  );
}
