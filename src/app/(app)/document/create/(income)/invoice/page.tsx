'use client';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import Stepper from '@/components/stepper';
import { Input } from '@nextui-org/input';
import { DatePicker } from '@nextui-org/date-picker';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { postInvoice } from '@/services/createDocument';
import { InvoiceInfo } from '@/types/DocumentInfo';
import { Select, SelectItem } from '@nextui-org/react';
import { Textarea } from '@nextui-org/input';
import { Listbox, ListboxItem } from '@nextui-org/react';
import Document from '@/components/document';
import { PlusIcon } from '@/components/icons';
import ProductEditTable from '@/components/table/product-edit-table';
import { products } from '@/constants/mock/product';
import BillBoard from '@/components/document/billboard';

export default function Invoice() {
  const router = useRouter();
  const price_tax = ['รวมภาษี', 'ไม่รวมภาษี'];
  const [discount, setDiscount] = useState<number>(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const document_id = formData.get('document_id') as string;
    const customer_name = formData.get('customer_name') as string;
    const created_date = formData.get('created_date') as string;
    const expired_date = formData.get('expired_date') as string;
    const customer_address = formData.get('customer_address') as string;
    const customer_phone = formData.get('customer_phone') as string;

    //validate
    if (!customer_name || customer_name.trim() === '') {
      alert('กรุณาใส่ชื่อลูกค้า');
      return;
    }

    if (!created_date || created_date.trim() === '') {
      alert('กรุณาใส่วันที่สร้าง');
      return;
    }

    if (!expired_date || expired_date.trim() === '') {
      alert('กรุณาใส่วันที่หมดอายุ');
      return;
    }

    if (!customer_address || customer_address.trim() === '') {
      alert('กรุณาใส่ที่อยู่');
      return;
    }

    if (!customer_phone || customer_phone.trim() === '') {
      alert('กรุณาใส่เบอร์โทรศัพท์');
      return;
    }

    // เช็คความถูกต้องของเบอร์โทร
    const phoneRegex = /^[0-9]{9,10}$/; // ตัวเลข 9-10 ตัว
    if (!phoneRegex.test(customer_phone)) {
      alert('กรุณาใส่เบอร์โทรศัพท์ให้ถูกต้อง');
      return;
    }

    // เช็ควันที่ว่าต้องไม่ให้วันหมดอายุมาก่อนวันที่สร้าง
    if (new Date(expired_date) < new Date(created_date)) {
      alert('วันที่หมดอายุไม่ควรจะมาก่อนวันที่สร้าง');
      return;
    }

    // ถ้าทุกอย่างผ่านการตรวจสอบ ก็ส่งข้อมูลไป backend
    console.log({
      customer_name,
      created_date,
      expired_date,
      customer_address,
      customer_phone,
    });
    //formatted data to Invoice Type
    const new_invoice: InvoiceInfo = {
      document_id,
      customer_name,
      created_date,
      expired_date,
      customer_address,
      customer_phone,
    };
    //send data to back
    const status = await postInvoice(new_invoice);
    if (status == 'ok' || status == 'ok with data') {
      router.push('/home');
    } else {
      alert('re submit form!');
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 justify-start items-center p-4 md:p-6 lg:px-12">
      {/* header stepper */}
      <Stepper type="income" />

      {/* document */}
      <Document>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl">สร้างใบเเจ้งหนี้</h1>
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
            <div className="w-full">ข้อมูลลูกค้า</div>

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
                name="expired_date"
                label="วันที่หมดอายุ"
                variant="bordered"
                className="w-full"
              />
              <Input
                name="customer_address"
                type="text"
                label="ที่อยู่"
                variant="bordered"
                className="col-span-2 full"
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
            <div className="w-full">ข้อมูลและราคาภาษี</div>
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
              {/* table of selected products */}
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
              <BillBoard variant="light" title="ส่วนลดรวม" amount={discount} unit="บาท" />
              <BillBoard
                variant="primary"
                title="จำนวนเงินทั้งสิ้น"
                amount={discount}
                unit="บาท"
              />
            </div>
          </div>

          <Divider className="my-6" />

          <div className="grid grid-cols-[2fr_8fr] gap-4">
            <div className="w-full">หมายเหตุสำหรับลูกค้า</div>
            <div className="grid grid-cols-[1fr]">
              <Textarea
                isDisabled
                label="หมายเหตุสำหรับลูกค้า"
                labelPlacement="outside"
                placeholder=""
                defaultValue=""
                className="max-w-xs"
              />
            </div>
          </div>

          <Divider className="my-4" />

          <div className="grid grid-cols-[2fr_8fr] gap-4">
            <div className="w-full">เเนบไฟล์เอกสารนี้</div>
            <div className="grid grid-cols-[1fr]">
              <Textarea
                isDisabled
                label="ไฟล์ที่อัปโหลด(สามารถลากไฟล์มาวางในหน้านี้ได้เลย)"
                labelPlacement="outside"
                placeholder=""
                defaultValue=""
                className="max-w-xs"
              />
            </div>
          </div>

          <Divider className="my-6" />

          <div className="w-full flex justify-end">
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              <Button size="lg">ยกเลิก</Button>
              <Button size="lg" variant="solid" color="secondary">
                บันทึกร่าง
              </Button>
              <Button size="lg" type="submit" color="primary" variant="solid">
                อนุมัติใบแจ้งหนี้
              </Button>
            </div>
          </div>
        </form>
      </Document>
    </div>
  );
}
