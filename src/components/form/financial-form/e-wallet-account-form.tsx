import SelectEWalletProvider from '@/components/select/financial/selectEWalletProvider';
import SelectEWalletProviderType from '@/components/select/financial/selectEWalletProviderType';
import { Input } from '@nextui-org/input';

interface Props {
  providerType: string;
  provider: string;
  name: string;
  accountNumber: string;
  setProviderType: (x: string) => void;
  setProvider: (x: string) => void;
  setName: (x: string) => void;
  setAccountNumber: (x: string) => void;
}

export default function EWalletAccountForm(props: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <SelectEWalletProviderType onValueChange={props.setProviderType}/>
      <SelectEWalletProvider providerType={props.providerType} onValueChange={props.setProvider}/>
      <Input
        name="accountName" //didn't use but to make it semantic
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
        type="text"
        label="ชื่อบัญชีที่ใช้บริการ"
        variant="bordered"
        className="w-full"
        isRequired
      />
      <Input
        name="accountNumber"
        value={props.accountNumber}
        onChange={(e) => props.setAccountNumber(e.target.value)}
        type="text"
        label="เลขที่บัญชี e-wallet"
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
