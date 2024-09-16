import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";

export default function AccountSummary() {
  return (
    <div className="flex flex-col gap-2 items-center col-span-1 min-h-[350px]">
      <span className="flex flex-row justify-between items-center w-full">
        <h1>เงินคุณอยู่ไหน</h1>
        <Dropdown>
          <DropdownTrigger>
            <Button
              radius="full"
              size="sm"
              className="text-black border-1 border-primary bg-white hover:border-primary-dark"
            >
              ภาพรวมการเงิน
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>เดือนนี้</DropdownItem>
            <DropdownItem>เดือนที่แล้ว</DropdownItem>
            <DropdownItem>ปีนี้</DropdownItem>
            <DropdownItem>ปีที่แล้ว</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </span>
      <div className="w-full h-full p-4 bg-white flex">component 5</div>
    </div>
  );
}
