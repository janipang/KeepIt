'use client';

import { postJoinBusiness } from '@/services/business';
import { setCookie } from '@/services/cookie';
import { Button, Card, Input } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

interface Props {
  children?: React.ReactNode;
  onClose: () => void;
}

const JoinBusinessViaCodeForm: React.FC<Props> = ({
  children,
  onClose,
  ...props
}) => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const invitationCode = formData.get('invitationCode') as string;

    // validate code
    const regex = /^[a-z0-9]{6}$/;
    if (!regex.test(invitationCode)) {
      alert('กรุณากรอกรหัส 6 หลัก');
      return false;
    }

    // api call
    const business = await postJoinBusiness(invitationCode);
    if (business) {
      setCookie('BussinessName', business.name);
      setCookie('BussinessBranch', business.branch);
      router.push('/home');
    } else {
      alert('กรุณาลองอีกครั้ง');
    }
  };

  return (
    <Card className="h-full shadow-none border-none p-4 md:p-8 max-h-[90vh]">
      <div className="flex flex-col gap-4 w-full items-center">
        <h1 className="text-heading w-full text-center">
          ใส่รหัสเข้าร่วมกิจการ
        </h1>
        <form
          onSubmit={handleSubmit}
          className="h-full w-full flex flex-col justify-between"
        >
          <Input
            name="invitationCode"
            placeholder='X X X X X'
            size="md"
            type="text"
            variant="bordered"
            className="w-full"
            isRequired
          />
          <Button type="submit" color="primary" className="text-lg w-full mt-4">
            เข้าร่วม
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default JoinBusinessViaCodeForm;
