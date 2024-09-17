"use client";
import { PlusIcon } from "@/components/icons";
import SearchInput from "@/components/searchInput";
import ContactTable from "@/components/table/contactTable";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "@nextui-org/button";

export default function Contact() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="p-4 rounded-lg shadow-lg grid gap-2 grid-cols-[1fr_5fr] grid-rows-[50px_1fr] bg-white">
      <span>ผู้ติดต่อ</span>
      <Button startContent={<PlusIcon />} className="w-fit">
        เพิ่มผู้ติดต่อ
      </Button>
      <Accordion selectionMode="multiple">
        <AccordionItem key="1" aria-label="ทั้งหมด1" title="ทั้งหมด">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="ลูกค้า" title="ลูกค้า">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="ผู้ขาย" title="ผู้ขาย">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="4" aria-label="ปิดใช้งาน" title="ปิดใช้งาน">
          {defaultContent}
        </AccordionItem>
      </Accordion>
        <ContactTable />
    </div>
  );
}
