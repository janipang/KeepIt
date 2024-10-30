'use client'

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import CreateButton from "../button/createButton";
import IncomeChart from "../chart/incomeChart";
import { useRouter } from "next/navigation";

export default function IncomeSummary() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 items-center col-span-1 min-h-[350px]">
      <span className="flex flex-row justify-between items-center w-full">
        <h1>รายได้</h1>
        <Dropdown>
          <DropdownTrigger>
            <CreateButton>บันทึกรายรับ</CreateButton>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem onClick={()=> router.push('/document/create/income-record')}>บันทึกรายรับ</DropdownItem>
            <DropdownItem onClick={()=> router.push('/document/create/quotation')}>ใบเสนอราคา</DropdownItem>
            <DropdownItem onClick={()=> router.push('/document/create/receipt')}>ใบเสร็จรับเงิน</DropdownItem>
            <DropdownItem onClick={()=> router.push('/document/create/invoice')}>ใบแจ้งหนี้</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </span>
      <div className="w-full h-full p-4 bg-white flex">
        <IncomeChart />
      </div>
    </div>
  );
}
