import {
  BankAccount,
  CashAccount,
  EWallet,
  FinancialChannel,
} from '@/types/FinancialChannel';
import { Avatar, Card } from '@nextui-org/react';

interface Props {
  type: 'cash' | 'bankaccount' | 'e-wallet';
  channels: FinancialChannel[];
  // accounts: CashAccount[] | BankAccount[] | EWallet[];
}

export default function ChannelSection({ type, channels }: Props) {
  const title = {
    cash: 'เงินสด',
    bankaccount: 'เงินฝากธนาคาร',
    'e-wallet': 'กระเป๋าเงินอิเล็กทรอนิกส์',
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl">{title[type]}</h2>
      <div className="flex gap-8">
        {channels.map((channel, index) => (
          <Card
            key={index}
            className="rounded-none p-4 h-[170px] w-[320px] grid grid-rows-[3.5fr_1.5fr] shadow-xl "
          >
            <div className="w-full h-full flex gap-8">
              <Avatar />
              <div className="flex flex-col">
                <p className="font-bold">{channel.account.name}</p>
                <p>
                  {channel.type === 'bankaccount' ||
                  channel.type === 'e-wallet' ? (
                    <span>
                      {
                        (channel.account as BankAccount | EWallet)
                          .account_number
                      }
                    </span>
                  ) : null}
                </p>
              </div>
            </div>
            <div className="w-full h-full border-t-2 border-accent flex justify-between items-end">
              <p>{channel.account.id}</p>
              <span className="flex gap-4">
                <p>{channel.account.balance}</p>
                <p>บาท</p>
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
