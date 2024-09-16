import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import CreateButton from "../button/createButton";

export default function IncomeSummary() {
  return (
    <div className="flex flex-col gap-2 items-center col-span-1 min-h-[350px]">
      <span className="flex flex-row justify-between items-center w-full">
        <h1>รายได้</h1>
        <Dropdown>
          <DropdownTrigger>
            <CreateButton>
              ส้รางใบเสร็จรับเงิน
            </CreateButton>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>ใบเสนอราคา</DropdownItem>
            <DropdownItem>ใบเสร็จรับเงิน</DropdownItem>
            <DropdownItem>ใบแจ้งหนี้</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </span>
      <div className="w-full h-full p-4 bg-white flex">component 1</div>
    </div>
  );
}
