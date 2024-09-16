import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
  } from "@nextui-org/dropdown";
  import CreateButton from "../button/createButton";
  
  export default function ExpenseSummary() {
    return (
      <div className="flex flex-col gap-2 items-center col-span-1 min-h-[350px]">
        <span className="flex flex-row justify-between items-center w-full">
          <h1>ค่าใช้จ่าย</h1>
          <Dropdown>
            <DropdownTrigger>
              <CreateButton>
                บันทึกค่าใช้จ่าย
              </CreateButton>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>ใบสั่งซื้อ</DropdownItem>
              <DropdownItem>ซื้อสินค้า</DropdownItem>
              <DropdownItem>บันทึกค่าใช้จ่าย</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </span>
        <div className="w-full h-full p-4 bg-white flex">component 1</div>
      </div>
    );
  }
  