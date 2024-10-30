'use client';

import React, { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie, setCookie } from '@/services/cookie';
import {
  deleteBusiness,
  deleteLeaveBusiness,
  getBusinesses,
} from '@/services/business';
import Image from 'next/image';
import Enterprise from '@/types/Enterprise';
import {
  DeleteIcon,
  DiamondIcon,
  GroupIcon,
  LogoutIcon,
} from '@/components/icons';
import {
  Button,
  Chip,
  Modal,
  ModalContent,
  useDisclosure,
} from '@nextui-org/react';
import { PlusIcon } from 'lucide-react';
import JoinBusinessViaCodeForm from '@/components/form/joinBusinessViaCodeForm';
import Loading from '@/components/loading';

export default function SelectBusiness() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [joinedBusiness, setJoinedBusiness] = useState<
    { role: string; name: string; branch: string; logoUrl: string }[] | null
  >(null);
  const [pending, setPending] = useState<boolean>(true);

  useEffect(() => {
    async function fetchBusinessData() {
      const data = await getBusinesses();
      setJoinedBusiness(data);
      setPending(false);
    }

    fetchBusinessData();
  }, []);

  async function handleDeleteBusiness(name: string, branch: string) {
    if (await deleteBusiness(name, branch)) {
      return true;
    }
    return false;
  }

  async function handleLeaveBusiness(name: string, branch: string) {
    if (await deleteLeaveBusiness(name, branch)) {
      return true;
    }
    return false;
  }

  async function jumpIntoBusiness(name: string, branch: string) {
    setCookie('BussinessName', name);
    setCookie('BussinessBranch', branch);
    router.push('/home');
  }

  return (
    <div className="flex flex-col justify-start items-center p-8 gap-8 mx-auto my-10 w-4/5 h-fit md:w-1/2 bg-white/70 backdrop-blur-sm rounded-2xl animate-fade">
      <h1 className="text-2xl font-extrabold">
        เลือกกิจการที่ต้องการเข้าใช้งาน
      </h1>
      <div className="w-full">
        {!pending ? (
          <div className="flex flex-col items-center justify-center w-full min-h-64 px-4 py-10 border-2 border-dashed border-black rounded-lg bg-primary/40 transition-colors">
            <div className="flex flex-col gap-4 w-full h-full overflow-y-scroll scrollbar-hide overflow-x-hidden">
              {joinedBusiness &&
                joinedBusiness.map((business, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      jumpIntoBusiness(business.name, business.branch)
                    }
                  >
                    <div className="w-full p-2 rounded-xl shadow-lg bg-white grid grid-rows-[60px_45px] grid-cols-[1fr_5fr_2fr] gap-2 animate-fade">
                      <div className="row-span-2 w-full h-full aspect-square p-3">
                        {business.logoUrl && business.logoUrl !== '-' ? (
                          <Image
                            src={business.logoUrl}
                            alt="business-logo"
                            objectFit="cover"
                            width="2048"
                            height="2048"
                            className="w-full h-full"
                          />
                        ) : index % 3 === 0 ? (
                          <Image
                            src="/company-logo/logo-4.png"
                            alt="business-logo"
                            objectFit="cover"
                            width="2048"
                            height="2048"
                            className="w-full h-full"
                          />
                        ) : index % 3 === 1 ? (
                          <Image
                            src="/company-logo/logo-3.png"
                            alt="business-logo"
                            objectFit="cover"
                            width="2048"
                            height="2048"
                            className="w-full h-full"
                          />
                        ) : (
                          <Image
                            src="/company-logo/logo.png"
                            alt="business-logo"
                            objectFit="cover"
                            width="2048"
                            height="2048"
                            className="w-full h-full"
                          />
                        )}
                      </div>

                      <div className="flex flex-col gap-0 self-start justify-self-start text-left pt-2">
                        <p className="text-lg font-bold">
                          {decodeURIComponent(business.name)}
                        </p>
                        <p className="text-accent-dark w-full">
                          {'สาขา '}
                          {decodeURIComponent(business.branch)}
                        </p>
                      </div>

                      <Chip
                        className="self-start justify-self-end"
                        color={
                          business.role === 'admin' ? 'primary' : 'secondary'
                        }
                      >
                        {business.role}
                      </Chip>

                      {business.role === 'admin' ? (
                        <Button
                          variant="light"
                          isIconOnly
                          onClick={() =>
                            handleDeleteBusiness(business.name, business.branch)
                          }
                          className="row-start-2 col-start-3 self-end justify-self-end text-accent-dark"
                        >
                          <DeleteIcon />
                        </Button>
                      ) : (
                        <Button
                          variant="light"
                          isIconOnly
                          onClick={() =>
                            handleLeaveBusiness(business.name, business.branch)
                          }
                          className="row-start-2 col-start-3 self-end justify-self-end text-accent-dark"
                        >
                          <LogoutIcon />
                        </Button>
                      )}
                    </div>
                  </button>
                ))}
            </div>
            <div className="flex flex-col gap-4 w-full h-full overflow-y-scroll">
              {!joinedBusiness && (
                <div className="w-full h-full flex justify-center items-center">
                  <p className="text-subheading text-accent-dark">
                    ไม่มีกิจการที่เข้าร่วม
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>

      {/* interaction zone */}
      <div className="flex gap-2 justify-end w-full">
        <Button
          startContent={<GroupIcon />}
          onPress={() => onOpen()}
          color="secondary"
          className="w-fit justify-self-end"
        >
          เข้าร่วมผ่านโค้ด
        </Button>
        <Button
          startContent={<PlusIcon />}
          onPress={() => router.push('/newbusiness')}
          color="primary"
          className="w-fit justify-self-end"
        >
          กิจการใหม่
        </Button>
      </div>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <JoinBusinessViaCodeForm onClose={onClose} />
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
