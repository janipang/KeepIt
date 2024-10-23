import { Input } from '@nextui-org/input';

interface Props {
  bank: string;
  accountType: string;
  name: string;
  accountNumber: string;
  setBank: (x: string) => void;
  setAccountType: (x: string) => void;
  setName: (x: string) => void;
  setAccountNumber: (x: string) => void;
}

export default function BankAccountForm(props: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Input
        name="bank"
        value={props.bank}
        onChange={(e) => props.setBank(e.target.value)}
        type="text"
        label="ธนาคาร"
        variant="bordered"
        className="w-full"
      />
      <Input
        name="accountType"
        value={props.accountType}
        onChange={(e) => props.setAccountType(e.target.value)}
        type="text"
        label="ประเภทบัญชี"
        variant="bordered"
        className="w-full"
      />
      <Input
        name="name"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
        type="text"
        label="ชื่อบัญชีธนาคาร"
        variant="bordered"
        className="w-full"
      />
      <Input
        name="accountNumber"
        value={props.accountNumber}
        onChange={(e) => props.setAccountNumber(e.target.value)}
        type="text"
        label="เลขบัญชีธนาคาร"
        variant="bordered"
        className="w-full"
      />
    </div>
  );
}
