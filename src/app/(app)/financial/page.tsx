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
import { Divider } from '@nextui-org/react';
import FinancialChannelCard from '@/components/card/financialChannelCard';
import ChannelSection from '@/components/financial/channelSection';
import { useEffect, useState } from 'react';
import { getGroupedFinancialChannel } from '@/services/financialChannel';
import { FinancialChannel } from '@/types/FinancialChannel';

export default function Financial() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [channels, setChannels] = useState<{
    cash: FinancialChannel[];
    bankaccount: FinancialChannel[];
    'e-wallet': FinancialChannel[];
  }>({
    cash: [],
    bankaccount: [],
    'e-wallet': [],
  });

  useEffect(() => {
    async function fetchChannels() {
      const channels = await getGroupedFinancialChannel();
      if (channels) {
        setChannels(channels);
      }
    }

    fetchChannels();
  }, []);
  return (
    <>
      <div className="flex flex-col">
        <section className="flex justify-between">
          <h1 className="text-heading">ช่องทางการเงิน</h1>
          <Button
            startContent={<PlusIcon />}
            onPress={() => onOpen()}
            color="primary"
            className="w-fit min-w-[180px]"
          >
            เพิ่มบัญชี
          </Button>
        </section>

        <Divider className="my-8" />
        <ChannelSection type="cash" channels={channels.cash} />
        <Divider className="my-8" />
        <ChannelSection type="bankaccount" channels={channels.bankaccount} />
        <Divider className="my-8" />
        <ChannelSection type="e-wallet" channels={channels['e-wallet']} />
      </div>

      {/* ---------- create financial channel -------- */}
      <Modal size="3xl" isOpen={isOpen} onClose={onClose} placement="center">
        <ModalContent className="h-[60vh] max-h-[1200px]">
          {(onClose) => <CreateFinancialChannelForm onClose={onClose} />}
        </ModalContent>
      </Modal>
    </>
  );
}
