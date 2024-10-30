"use client";

import { PlusIcon } from "@/components/icons";
import RecordsTable from "@/components/recordsTable";
import { Listbox, ListboxItem, cn } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useEffect, useMemo, useState } from "react";
import { Selection } from "@react-types/shared";
import { Key } from "@react-types/shared";
import CreateContactForm from "@/components/form/createContactForm";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import CreateButton from "@/components/button/createButton";
import { useRouter } from 'next/navigation';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";

export default function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set<Key>());
  const router = useRouter();

  return (
    <>
      <div className="p-3 rounded-md shadow-md grid gap-3 grid-cols-[1fr_5fr] grid-rows-[40px_1fr] bg-gray-50">

      
        <p className="text-heading">คลังเอกสาร</p>

        {/* Dropdown สำหรับสร้างเอกสาร */}
        <Dropdown>
          <DropdownTrigger>
            <Button
  color="primary"
  className="py-0.5 px-1 text-xs rounded-sm" // Reduce padding and border radius
  style={{ fontSize: '0.65rem', padding: '0.15rem 0.3rem' }} // Further decrease font size and padding
>



              สร้างเอกสาร
            </Button>
          </DropdownTrigger>
          <DropdownMenu className="p-1 text-sm" style={{ minWidth: "150px" }}>
            <DropdownItem key="quotation" onClick={() => router.push('/document/create/quotation')}>
              ใบเสนอราคา
            </DropdownItem>
            <DropdownItem key="invoice" onClick={() => router.push('/document/create/invoice')}>
              ใบแจ้งหนี้
            </DropdownItem>
            <DropdownItem key="receipt" onClick={() => router.push('/document/create/receipt')}>
              ใบเสร็จรับเงิน
            </DropdownItem>
            <DropdownItem key="purchase-order" onClick={() => router.push('/document/create/purchase-order')}>
              ใบสั่งซื้อ
            </DropdownItem>
            <DropdownItem key="product-purchase" onClick={() => router.push('/document/create/product-purchase')}>
              ซื้อสินค้า
            </DropdownItem>
            <DropdownItem key="expense-record" onClick={() => router.push('/document/create/expense-record')}>
              บันทึกค่าใช้จ่าย
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <div className="flex w-full flex-col">
          <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
            <Listbox
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <ListboxItem key="all" className="p-4" showDivider>
                ทั้งหมด
              </ListboxItem>
              <ListboxItem key="customer" className="p-4" showDivider>
                ยังไม่ออกเอกสาร
              </ListboxItem>
              <ListboxItem key="provider" className="p-4">
                ออกเอกสาร
              </ListboxItem>
            </Listbox>
          </div>
        </div>
        <RecordsTable />
      </div>

      {/* Modal สำหรับ CreateContactForm */}
      <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <CreateContactForm onClose={onClose}/>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}