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
      <Input
        name="providerType"
        value={props.providerType}
        onChange={(e) => props.setProviderType(e.target.value)}
        type="text"
        label="รูปแบบผู้ให้บริการ"
        variant="bordered"
        className="w-full"
      />
      <Input
        name="provider"
        value={props.provider}
        onChange={(e) => props.setProvider(e.target.value)}
        type="text"
        label="ผู้ให้บริการ"
        variant="bordered"
        className="w-full"
      />
      <Input
        name="name"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
        type="text"
        label="ชื่อบัญชีที่ใช้บริการ"
        variant="bordered"
        className="w-full"
      />
      <Input
        name="accountNumber"
        value={props.accountNumber}
        onChange={(e) => props.setAccountNumber(e.target.value)}
        type="text"
        label="เลขที่บัญชี e-wallet"
        variant="bordered"
        className="w-full"
      />
    </div>
  );
}
