'use client';

import { PlusIcon } from '@/components/icons';
import ContactTable from '@/components/table/contactTable';
import { Listbox, ListboxItem, cn } from '@nextui-org/react';
import { Button } from '@nextui-org/button';
import { useEffect, useMemo, useState } from 'react';
import { Selection } from '@react-types/shared';
import { Key } from '@react-types/shared';
import CreateContactForm from '@/components/form/createContactForm';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import ProductTable from '@/components/table/productTable';

export default function Product() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set<Key>());
  const [creating, setCreating] = useState<boolean>(false);
  return (
    <>
      <div className="p-4 rounded-lg shadow-lg grid gap-4 grid-cols-[1fr_6fr] grid-rows-[50px_1fr] bg-white">
        <div className="flex col-span-2 justify-between">
          <p className="text-heading">สินค้า/บริการ</p>
          <Button
            startContent={<PlusIcon />}
            onPress={() => onOpen()}
            color="primary"
            className="w-fit justify-self-end"
          >
            เพิ่มสินค้า
          </Button>
        </div>
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
              <ListboxItem key="all" className="p-4" showDivider>
                ทั้งหมด
              </ListboxItem>
              <ListboxItem key="customer" className="p-4" showDivider>
                สินค้า
              </ListboxItem>
              <ListboxItem key="provider" className="p-4">
                บริการ
              </ListboxItem>
            </Listbox>
          </div>
        </div>
        <ProductTable />
      </div>
      <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <CreateContactForm onClose={onClose} />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
