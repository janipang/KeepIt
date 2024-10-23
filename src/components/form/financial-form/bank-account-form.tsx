import SelectBank from '@/components/select/financial/selectBank';
import SelectBankAccountType from '@/components/select/financial/selectBankAccountType';
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
    <div className="grid grid-cols-2 gap-4 relative">
      <SelectBank onValueChange={props.setBank} />
      <SelectBankAccountType onValueChange={props.setAccountType} />
      <Input
        name="accountName" //didn't use but to make it semantic
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
        type="text"
        label="ชื่อบัญชีธนาคาร"
        variant="bordered"
        className="w-full"
        isRequired
      />
      <Input
        name="accountNumber"
        value={props.accountNumber}
        onChange={(e) => props.setAccountNumber(e.target.value)}
        type="text"
        label="เลขบัญชีธนาคาร"
        variant="bordered"
        className="w-full"
        isRequired
      />
      
      {/* dummy */}
      <input //dummy for browser validating
        type="text"
        value={props.name}
        required
        className="absolute top-2/3 left-0 opacity-0 w-1/2 -z-10"
      />
      <input //dummy for browser validating
        type="text"
        value={props.accountNumber}
        required
        className="absolute top-2/3 left-1/2 opacity-0 w-1/2 -z-10"
      />
    </div>
  );
}
