'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import CreateFinancialChannelForm from '@/components/form/createFinancialChannelForm';
import { Button } from '@nextui-org/button';
import { PlusIcon } from '@/components/icons';

export default function Financial() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        startContent={<PlusIcon />}
        onPress={() => onOpen()}
        className="w-fit"
      >
        เพิ่มบัญชี
      </Button>
      <Modal size="3xl" isOpen={isOpen} onClose={onClose} placement="center">
        <ModalContent className="h-[60vh] max-h-[1200px]">
          {(onClose) => <CreateFinancialChannelForm onClose={onClose} />}
        </ModalContent>
      </Modal>
    </>
  );
}
