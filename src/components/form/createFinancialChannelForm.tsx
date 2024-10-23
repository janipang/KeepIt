import { Card } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { FormEvent, useState } from 'react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import RadioFinancialChannel from '../radio/radioFinancialChannel';
import {
  BankAccount,
  CashAccount,
  EWallet,
  FinancialChannel,
} from '@/types/FinancialChannel';
import { postFinancialChannel } from '@/services/financialChannel';
import CashAccountForm from './financial-form/cash-account-form';
import BankAccountForm from './financial-form/bank-account-form';
import EWalletAccountForm from './financial-form/e-wallet-account-form';
import { validateFinancialAccount } from '@/services/validate/financial';

interface Props {
  children?: React.ReactNode;
  onClose: () => void;
}

const CreateFinancialChannelForm: React.FC<Props> = ({
  children,
  onClose,
  ...props
}) => {
  const router = useRouter();
  const [type, setType] = useState<'cash' | 'bankaccount' | 'e-wallet'>('bankaccount');
  const [account, setAccount] = useState<CashAccount | BankAccount | EWallet>();
  const [name, setName] = useState<string>(''); //for เงินสด และ บัญชีธนาคาร และ e-wallet
  // --------- account information ------//
  const [bank, setBank] = useState<string>(''); //for บัญชีธนาคาร
  const [accountType, setAccountType] = useState<string>(''); //for บัญชีธนาคาร
  const [accountNumber, setAccountNumber] = useState<string>(''); //for บัญชีธนาคาร และ e-wallet
  const [providerType, setProviderType] = useState<string>(''); //for e-wallet
  const [provider, setProvider] = useState<string>(''); //for e-wallet

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    if (!(form.checkValidity())){
      form.reportValidity();
    }

    let new_account;
    switch (type) {
      case 'cash':
        new_account = {
          name: name,
          balance: 0,
        } as CashAccount;
        break;
      case 'bankaccount':
        new_account = {
          bank: bank,
          account_type: accountType,
          name: name,
          account_number: accountNumber,
          balance: 0,
        } as BankAccount;
        break;
      case 'e-wallet':
        new_account = {
          provider_type: providerType,
          provider: provider,
          name: name,
          account_number: accountNumber,
          balance: 0,
        } as EWallet;
        break;
      default:
        alert('โปรดระบุประเภทบัญชี');
        return false;
    }

    if (new_account) {
      const channel: FinancialChannel = {
        type: type,
        account: new_account,
      };
      if (await validateFinancialAccount(channel)) {
        const new_channel = await postFinancialChannel(channel);

        if (new_channel) {
          router.push('/financial');
          return true;
        } else {
          alert('เกิดข้อผิดพลาดในการสร้างบัญชี');
          return false;
        }
      }
    }
  };

  return (
    <Card className="h-full shadow-none border-none p-4 md:p-8 max-h-[90vh]">
      <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
        <section className="flex flex-col gap-6 justify-start my-4">
          <h1 className="text-3xl">เพิ่มช่องทางการเงิน</h1>
          <RadioFinancialChannel onValueChange={setType} />
          <Divider />
        </section>

        <section className="flex flex-col gap-4 my-4">
          {type === 'cash' ? (
            <CashAccountForm name={name} setName={setName} />
          ) : type === 'bankaccount' ? (
            <BankAccountForm
              bank={bank}
              accountType={accountType}
              name={name}
              accountNumber={accountNumber}
              setBank={setBank}
              setAccountType={setAccountType}
              setName={setName}
              setAccountNumber={setAccountNumber}
            />
          ) : type === 'e-wallet' ? (
            <EWalletAccountForm
              providerType={providerType}
              provider={provider}
              name={name}
              accountNumber={accountNumber}
              setProviderType={setProviderType}
              setProvider={setProvider}
              setName={setName}
              setAccountNumber={setAccountNumber}
            />
          ) : null}
        </section>

        <section className="flex flex-col gap-4 mt-4">
          <Divider />
          <div className="flex flex-row justify-end gap-4">
            <Button
              className="text-tiny"
              variant="flat"
              size="md"
              onPress={onClose}
            >
              ยกเลิก
            </Button>
            <Button
              className="text-tiny"
              color="primary"
              size="md"
              type="submit"
            >
              เพิ่ม
            </Button>
          </div>
        </section>
      </form>
    </Card>
  );
};
export default CreateFinancialChannelForm;
