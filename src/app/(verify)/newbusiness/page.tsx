'use client';
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Enterprise from '@/types/Enterprise';
import { getCookie, setCookie } from '@/services/cookie';
import { postBusiness } from '@/services/business';
import { Input } from '@nextui-org/input';
import FileUpload from '@/components/fileUpload';
import { getFileURL } from '@/services/fileUpload';
import { Button } from '@nextui-org/react';

export default function NewBusiness() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const logoFile = formData.get('logoFile') as File;
    let logoUrl: string = "";
    if (logoFile){
      // logoUrl = await getFileURL(logoFile);
      logoUrl = "";
    }

    const enterprise: Enterprise = {
      registrationNumber: formData.get('registrationNumber') as string,
      name: formData.get('name') as string,
      branch: 'สำนักงานใหญ่',
      address: formData.get('address') as string,
      phone: formData.get('phone') as string,
      taxID: formData.get('taxId') as string,
      logoUrl: logoUrl,
    };

    const new_enterprise = await postBusiness(enterprise);
    if (new_enterprise) {
      setCookie('BussinessName', new_enterprise.name);
      setCookie('BussinessBranch', new_enterprise.branch);
      router.push('/success');
    } else {
      // alert('create business failed');
    }
  };
  return (
    <div className="flex flex-col justify-center items-center p-8 gap-8 mx-auto my-10 w-4/5 h-2/3 md:w-1/2 md:h-3/4 bg-white/70 backdrop-blur-sm rounded-2xl animate-fade">
      <h1 className="text-2xl font-extrabold">NEW BUSINESS</h1>
      <div className="lex flex-col items-start gap-4 w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <FileUpload name="logoFile" accept="image/*" label='- business logo -'/>
          <Input
            name="registrationNumber"
            size="md"
            type="text"
            variant="bordered"
            label="หมายเลขกิจการ 13 หลัก"
            isRequired
          />
          <Input
            name="taxId"
            size="md"
            type="text"
            variant="bordered"
            label="เลขประจำตัวผู้เสียภาษี 13 หลัก"
            isRequired
          />
          <Input
            name="name"
            size="md"
            type="text"
            variant="bordered"
            label="ชื่อกิจการ"
            isRequired
          />
          <Input
            name="address"
            size="md"
            type="text"
            variant="bordered"
            label="ที่อยู่"
            isRequired
          />
          <Input
            name="phone"
            size="md"
            type="text"
            variant="bordered"
            label="เบอร์โทรติดต่อ"
            isRequired
          />
          <Button type="submit" color="primary" className="text-lg w-full mt-4">
            เปิดกิจการ
          </Button>
        </form>
      </div>
    </div>
  );
}
