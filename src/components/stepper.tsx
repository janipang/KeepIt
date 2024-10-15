import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

interface Props {
  type: "income" | "expense"
}

export default function Stepper({ type }: Props) {
  const states_income = [
    {name:'ใบเสนอราคา', path:'/document/create/quotation'},
    {name:'ใบเเจ้งหนี้', path:'/document/create/invoice'},
    {name:'ใบเสร็จรับเงิน', path:'/document/create/reciept'},
    {name:'ออกใบกำกับภาษี', path:'/document/create/tax-invoice'}
  ];
  const states_expense = [
    {name:'ใบเสนอราคา', path:'/document/create/quotation'},
    {name:'ใบเเจ้งหนี้', path:'/document/create/invoice'},
    {name:'ใบเสร็จรับเงิน', path:'/document/create/reciept'},
    {name:'ออกใบกำกับภาษี', path:'/document/create/tax-invoice'}
  ];

  const states = type == "income" ? states_income : states_expense;
  return (
    <div className="w-full flex flex-row gap-12 max-w-screen-xl">
      {states.map((state, index) => (
        <Button
          key={index}
          href={state.path}
          as={Link}
          size="lg"
          radius="sm"
          color="primary"
          variant="faded"
        >
          {state.name}
        </Button>
      ))}
    </div>
  );
}
