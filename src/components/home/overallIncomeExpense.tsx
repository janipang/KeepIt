import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import CreateButton from "../button/createButton";
import IncomeChart from "../chart/incomeChart";
import OverallChart from "../chart/overallChart";

export default function OverallIncomeExpense() {
  return (
    <div className="flex flex-col gap-2 items-center col-span-2 min-h-[350px]">
      <span className="flex flex-row justify-between items-center w-full">
        <h1>ภาพรวมรายรับและรายจ่าย</h1>
        <Dropdown>
          <DropdownTrigger>
            <CreateButton>สร้างเอกสาร</CreateButton>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>ใบเสนอราคา</DropdownItem>
            <DropdownItem>ใบแจ้งหนี้</DropdownItem>
            <DropdownItem>ใบเสร็จรับเงิน</DropdownItem>
            <DropdownItem>ใบสั่งซื้อ</DropdownItem>
            <DropdownItem>ซื้อสินค้า</DropdownItem>
            <DropdownItem>บันทึกค่าใช้จ่าย</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </span>
      <div className="flex flex-col w-full h-full p-4 bg-white">
        <OverallChart/>
      </div>
    </div>
  );
}
