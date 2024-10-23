import { Input } from '@nextui-org/input';

interface Props {
  name: string;
  setName: (x: string) => void;
}

export default function CashAccountForm(props: Props) {
  return (
    <div className="grid grid-cols-1">
      <Input
        name="name"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
        type="text"
        label="ชื่อบัญชีเงินสด"
        variant="bordered"
        className="w-full"
      />
    </div>
  );
}
