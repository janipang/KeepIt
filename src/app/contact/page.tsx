"use client";
import { PlusIcon } from "@/components/icons";
import SearchInput from "@/components/searchInput";
import ContactTable from "@/components/table/contactTable";
import { Listbox, ListboxItem, cn } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useMemo, useState } from "react";

export default function Contact() {
    const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));
  
    const selectedValue = useMemo(
      () => Array.from(selectedKeys).join(", "),
      [selectedKeys]
    );
  return (
    <div className="p-4 rounded-lg shadow-lg grid gap-2 grid-cols-[1fr_6fr] grid-rows-[50px_1fr] bg-white">
      <span>ผู้ติดต่อ</span>
      <Button startContent={<PlusIcon />} className="w-fit">
        เพิ่มผู้ติดต่อ
      </Button>
      <div className="flex w-full flex-col">
        <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
          <Listbox
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={() => setSelectedKeys}
          >
            <ListboxItem key="all" className="p-4" showDivider>ทั้งหมด</ListboxItem>
            <ListboxItem key="customer" className="p-4" showDivider>ลูกค้า</ListboxItem>
            <ListboxItem key="provider" className="p-4">ผู้ขาย</ListboxItem>
          </Listbox>
        </div>
      </div>
      <ContactTable />
    </div>
  );
}
