import { Input } from '@nextui-org/input';

interface Props {
  name: string;
  setName: (x: string) => void;
}

export default function CashAccountForm(props: Props) {
  return (
    <div className="grid grid-cols-1 relative">
      <Input
        name="accountName" //didn't use but to make it semantic
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
        type="text"
        label="ชื่อบัญชีเงินสด"
        variant="bordered"
        className="w-full"
        isRequired
      />
      
      {/* dummy */}
      <input //dummy for browser validating
        type="text"
        value={props.name}
        required
        className="absolute top-0 opacity-0 w-3/4 -z-10"
      /> 
    </div>
  );
}
