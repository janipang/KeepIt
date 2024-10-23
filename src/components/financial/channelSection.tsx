'use client'

import {
  BankAccount,
  CashAccount,
  EWallet,
  FinancialChannel,
} from '@/types/FinancialChannel';
import { Avatar, Card } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import Loading from '../loading';

interface Props {
  type: 'cash' | 'bankaccount' | 'e-wallet';
  channels: FinancialChannel[];
  // accounts: CashAccount[] | BankAccount[] | EWallet[];
}

export default function ChannelSection({ type, channels }: Props) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <Loading className="bg-opacity-0"/>;
  }

  const title = {
    cash: 'เงินสด',
    bankaccount: 'เงินฝากธนาคาร',
    'e-wallet': 'กระเป๋าเงินอิเล็กทรอนิกส์',
  };
  interface Logos {
    [key: string]: string;
  }

  const logos: Logos = {
    'ธ.กรุงเทพ': '/bank-logo/bangkok-bank.svg',
    'ธ.กสิกรไทย': '/bank-logo/kasikorn-bank.svg',
    'ธ.ไทยพานิชย์': '/bank-logo/scb-bank.svg',
    'ธ.กรุงไทย': '/bank-logo/krungthai-bank.svg',
    'ธ.กรุงศรี': '/bank-logo/krungsri-bank.svg',
    'ธ.ออมสิน': '/bank-logo/government-bank.svg',
    Omise: '/e-wallet-logo/omise.svg',
    GBPrimePay: '/e-wallet-logo/gb-pay.png',
    'True Wallet': '/bank-logo/krungthai-bank.svg',
    'LINE Pay/wePAY': '/e-wallet-logo/line-pay.svg',
    PayPal: '/e-wallet-logo/paypal.svg',
    cash: '/bank-logo/cash-logo.svg',
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl">{title[type]}</h2>
      <div className="flex gap-8">
        {channels.map((channel, index) => {
          const bank_provider: string =
            channel.type === 'bankaccount'
              ? ((channel.account as BankAccount).bank as string)
              : channel.type === 'e-wallet'
                ? ((channel.account as EWallet).provider as string)
                : 'cash';

          return (
            <Card
              key={index}
              className="rounded-none p-4 h-[170px] w-[350px] grid grid-rows-[3.5fr_1.5fr] shadow-xl "
            >
              <div className="w-full h-full flex gap-6">
                <Avatar
                  alt="bank-logo"
                  className="w-8 h-8"
                  src={logos[bank_provider]}
                />
                <div className="flex flex-col">
                  <p className="font-bold">{channel.account.name}</p>
                  <span className="w-full flex gap-2">
                    {channel.type === 'bankaccount' ? (
                      <p>{(channel.account as BankAccount).bank} -</p>
                    ) : channel.type === 'e-wallet' ? (
                      <p>{(channel.account as EWallet).provider} -</p>
                    ) : null}
                    {channel.type === 'bankaccount' ||
                    channel.type === 'e-wallet' ? (
                      <p>
                        {
                          (channel.account as BankAccount | EWallet)
                            .account_number
                        }
                      </p>
                    ) : null}
                  </span>
                </div>
              </div>

              <div className="w-full h-full border-t-2 border-accent flex justify-between items-end">
                <p>{channel.account.id}</p>
                <span className="flex gap-4">
                  <p className="text-primary font-semibold">{channel.account.balance}</p>
                  <p>บาท</p>
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
