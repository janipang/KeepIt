import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { ArrowDropDownIcon, PlusIcon } from "../icons";
import CreateButton from "../button/createButton";

export default function PendingTransfer() {
  return (
    <div className="flex flex-col gap-2 items-center col-span-1 min-h-[350px]">
      <span className="flex flex-row justify-between items-center w-full">
        <h1>รอรับชำระ/รอชำระ</h1>
        <Dropdown>
          <DropdownTrigger>
            <CreateButton>
              ลูกหนี้
            </CreateButton>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>ลูกหนี้</DropdownItem>
            <DropdownItem>เจ้าหนี้</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </span>
      <div className="w-full h-full p-4 bg-white flex">component 2</div>
    </div>
  );
}
