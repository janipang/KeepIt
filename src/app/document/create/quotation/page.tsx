'use client';

import { DeleteIcon, PlusIcon } from '@/components/icons';
import Stepper from '@/components/stepper';
import { Input, Textarea } from '@nextui-org/input';
import { Divider } from '@nextui-org/divider';
import { DatePicker } from '@nextui-org/date-picker';
import { Select, SelectSection, SelectItem } from '@nextui-org/select';
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QuotationInfo } from '@/types/DocumentInfo';
import { postQuotation } from '@/services/createDocument';
import Document from '@/components/document';
import { Button } from '@nextui-org/react';
import { products } from '@/constants/mock/product';
import AnimatedDots from '@/components/animated-dots';
import ProductEditTable from '@/components/table/product-edit-table';

export default function Quotation() {
  const router = useRouter();
  const stepper = ['ใบเสนอราคา', 'ใบแจ้งหนี้', 'ใบเสร็จรับเงิน', 'ใบกำกับภาษี'];
  const price_tax = ['รวมภาษี', 'ไม่รวมภาษี'];
  const [discount, stDiscount] = useState<number>(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const document_id = formData.get('document_id') as string;
    const customer_name = formData.get('customer_name') as string;
    const created_date = formData.get('created_date') as string;
    const expired_date = formData.get('expired_date') as string;
    const customer_address = formData.get('customer_address') as string;
    const customer_phone = formData.get('customer_phone') as string;
    // validating
    if (customer_name == '') {
      alert('enter password');
      return;
    }
    //formatted data to Quotation Type
    const new_quotation: QuotationInfo = {
      document_id,
      customer_name,
      created_date,
      expired_date,
      customer_address,
      customer_phone,
    };
    //   send data to back
    const status = await postQuotation(new_quotation);
    if (status == 'ok' || status == 'ok with data') {
      router.push('/home');
    } else {
      alert('re submit form!');
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 justify-start items-center p-4 md:p-6 lg:px-12">
      {/* header stepper */}
      <Stepper data={stepper} />

      {/* document */}
      <Document>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <h1 className="text-2xl">สร้างใบเสนอราคา</h1>
            <Input
              name="document_id"
              type="text"
              label="เลขที่เอกสาร"
              variant="bordered"
              className="w-2/3 max-w-[150px]"
            />
          </div>

          <Divider className="my-6" />

          <div className="grid grid-cols-[2fr_8fr] gap-4">
            <h2 className="w-full">ข้อมูลลูกค้า</h2>
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-4">
              <Input
                name="customer_name"
                type="text"
                label="ชื่อลูกค้า"
                variant="bordered"
                className="w-full"
              />
              <DatePicker
                name="created_date"
                label="วันที่ออก"
                variant="bordered"
                className="w-full"
              />
              <DatePicker
                name="วันที่ใช้ได้ถึง"
                label="Birth date"
                variant="bordered"
                className="w-full"
              />
              <Input
                name="ที่อยู่"
                type="text"
                label="ที่อยู่"
                variant="bordered"
                className="full"
              />
              <Input
                name="customer_phone"
                type="text"
                label="เบอร์โทร"
                variant="bordered"
                className="full"
              />
            </div>
          </div>

          <Divider className="my-6" />

          <div className="grid grid-cols-[2fr_8fr] gap-4">
            <h2 className="w-full">ข้อมูลและราคาภาษี</h2>
            <div className="grid grid-cols-[1fr_1fr_1fr]">
              <Select
                label="ประเภทราคา"
                variant="bordered"
                className="max-w-xs w-full"
              >
                {price_tax.map((type) => (
                  <SelectItem key={type} variant="bordered">
                    {type}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>

          <Divider className="my-6" />

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h2>รายการ</h2>
              <h3 className="text-gray-600">สินค้า/บริการ</h3>
            </div>
            <div>
              <ProductEditTable products={products} />
              {/* table action group */}
              <div>
                <Button
                  variant="solid"
                  color="primary"
                  startContent={<PlusIcon />}
                >
                  เพิ่มรายการใหม่
                </Button>
              </div>
            </div>
          </div>

          <Divider className="my-6" />

          <div className="grid grid-cols-[2fr_8fr] gap-4">
            <h2 className="w-full">สรุปข้อมูล</h2>
            <div className="grid grid-cols-[2fr_3fr] gap-4">
              <div className="w-full flex p-4 justify-between items-center rounded-lg bg-accent-light">
                <p>ส่วนลดรวม</p>
                <span className='flex items-center gap-4'>
                  <p className="text-2xl font-semibold">{discount}</p>
                  <p>บาท</p>
                </span>
              </div>
              <div className="w-full flex p-4 justify-between items-center rounded-lg bg-primary text-white">
                <p>จำนวนเงินทั้งสิ้น</p>
                <span className='flex items-center gap-4'>
                  <p className="text-2xl font-semibold">{discount}</p>
                  <p>บาท</p>
                </span>
              </div>
            </div>
          </div>

          <Divider className="my-6" />

          <div className="grid grid-cols-[2fr_8fr] gap-4">
            <h2 className="w-full">หมายเหตุสำหรับลูกค้า</h2>
            <div className="grid grid-cols-1">
              <Textarea
                label="หมายเหตุสำหรับลูกค้า"
                labelPlacement="outside"
                placeholder=""
                defaultValue=""
              />
            </div>
          </div>

          <Divider className="my-6" />

          <div className="grid grid-cols-[2fr_8fr] gap-4">
            <div className="flex flex-col">
              <h2 className="w-full">แนบไฟล์ในเอกสารนี้</h2>
            </div>
            <div className="grid grid-cols-1">
              <Textarea
                isDisabled
                label="ไฟล์ที่อัปโหลด(สามารถลากไฟล์มาวางในหน้านี้ได้เลย)"
                labelPlacement="outside"
                placeholder=""
                defaultValue=""
              />
            </div>
          </div>

          <Divider className="my-6" />

          <div className="w-full flex justify-end">
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <Button>ยกเลิก</Button>
              <Button variant="solid" color="secondary">
                บันทึกร่าง
              </Button>
              <Button type="submit" color="primary" variant="solid">
                อนุมัติใบเสนอราคา
              </Button>
            </div>
          </div>
        </form>
      </Document>
      <AnimatedDots />
    </div>
  );
}
