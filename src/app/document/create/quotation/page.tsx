'use client';

import { radioUncheckedIcon } from '@/components/icons';
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
import { ProductInfo } from '@/types/Contact';
import Loading from '@/components/loading';

export default function Quotation() {
  const router = useRouter();
  const stepper = ['ใบเสนอราคา', 'ใบแจ้งหนี้', 'ใบเสร็จรับเงิน', 'ใบกำกับภาษี'];
  const price_tax = ['รวมภาษี', 'ไม่รวมภาษี'];

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
              <ProductTable products={products} />
              {/* table action group */}
              <div>
                <Button variant="solid">เพิ่มรายการใหม่</Button>
              </div>
            </div>
          </div>

          <Divider className="my-6" />

          <div className="grid grid-cols-[2fr_8fr] gap-4">
            <h2 className="w-full">สรุปข้อมูล</h2>
            <div className="grid grid-cols-[1fr]">
              <Textarea
                variant="bordered"
                label="Description"
                className="w-full"
              />
            </div>
          </div>

          <Divider className="my-6" />

          <div className="grid grid-cols-[2fr_8fr] gap-4">
            <div className="flex flex-col">
              <h2 className="w-full">แนบไฟล์ในเอกสารนี้</h2>
              <h3 className="text-gray-600">อัพโหลดไฟล์ pdf หรือ png</h3>
            </div>
            <div className="grid grid-cols-[1fr]">
              <Textarea
                variant="bordered"
                label="upload file"
                className="w-full"
              />
            </div>
          </div>

          <Divider className="my-6" />

          <div className="w-full flex justify-end">
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <Button>ยกเลิก</Button>
              <Button variant="solid">บันทึกร่าง</Button>
              <Input type="submit" value="Submit" variant="bordered" />
            </div>
          </div>
        </form>
      </Document>
    </div>
  );
}

function ProductTable({ products }: { products: ProductInfo[] }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <Loading />;
  }

  return (
    <table>
      <thead>
        <tr className="grid grid-cols-[0.5fr_4fr_1fr_1fr_1fr_1fr_1fr] text-left text-sm">
          <th className="p-2 font-normal" scope="col">
            ลำดับ
          </th>
          <th className="p-2 font-normal" scope="col">
            สินค้า/บริการ
          </th>
          <th className="p-2 font-normal" scope="col">
            จำนวน
          </th>
          <th className="p-2 font-normal" scope="col">
            ราคา/หน่วย
          </th>
          <th className="p-2 font-normal" scope="col">
            ส่วยลด/หน่วย
          </th>
          <th className="p-2 font-normal" scope="col">
            มูลค่าก่อนภาษี
          </th>
          <th className="p-2 font-normal" scope="col">
            หัก ณ ที่จ่าย
          </th>
        </tr>
      </thead>
      <tbody className="w-full">
        <tr className="grid grid-cols-[0.5fr_4fr_1fr_1fr_1fr_1fr_1fr] grid-rows-2">
          <p className="w-full border-2 border-accent flex items-center justify-center">
            1{' '}
          </p>
          <Select radius="none" variant="bordered" className="max-w-lg w-full">
            {products.map((product, index) => (
              <SelectItem key={index} variant="bordered" value={product.id}>
                {product.name}
              </SelectItem>
            ))}
          </Select>
          <Input
            name="amount"
            type="text"
            variant="bordered"
            radius="none"
            className="w-full row-span-2 "
          />
          <Input
            name="price"
            type="text"
            variant="bordered"
            radius="none"
            className="w-full row-span-2"
          />
          <Input
            name="discount"
            type="text"
            variant="bordered"
            radius="none"
            className="w-full row-span-2"
          />
          <Input
            name="real_price"
            type="text"
            variant="bordered"
            radius="none"
            className="w-full row-span-2"
          />
          <Input
            name="tax"
            type="text"
            variant="bordered"
            radius="none"
            className="w-full row-span-2"
          />
        </tr>
      </tbody>
    </table>
  );
}
