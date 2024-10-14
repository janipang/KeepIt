"use client";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import Stepper from "@/components/stepper";
import { Input } from "@nextui-org/input";
import { DatePicker } from "@nextui-org/date-picker";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { postInvoice } from "@/services/createDocument";
import { InvoiceInfo } from "@/types/DocumentInfo";
import { Select, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/input";
import { Listbox, ListboxItem } from "@nextui-org/react";

export default function Invoice() {
  const router = useRouter();
  const stepper = [
    "ใบเเจ้งหนี้",
    "รับชำระเงิน",
    "ใบเสร็จรับเงิน",
    "ออกใบกำกับภาษี",
  ];
  const price_tax = ["รวมภาษี", "ไม่รวมภาษี"];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const document_id = formData.get("document_id") as string;
    const customer_name = formData.get("customer_name") as string;
    const created_date = formData.get("created_date") as string;
    const expired_date = formData.get("expired_date") as string;
    const customer_address = formData.get("customer_address") as string;
    const customer_phone = formData.get("customer_phone") as string;

    //validate
    if (!customer_name || customer_name.trim() === "") {
      alert("กรุณาใส่ชื่อลูกค้า");
      return;
    }

    if (!created_date || created_date.trim() === "") {
      alert("กรุณาใส่วันที่สร้าง");
      return;
    }

    if (!expired_date || expired_date.trim() === "") {
      alert("กรุณาใส่วันที่หมดอายุ");
      return;
    }

    if (!customer_address || customer_address.trim() === "") {
      alert("กรุณาใส่ที่อยู่");
      return;
    }

    if (!customer_phone || customer_phone.trim() === "") {
      alert("กรุณาใส่เบอร์โทรศัพท์");
      return;
    }

    // เช็คความถูกต้องของเบอร์โทร
    const phoneRegex = /^[0-9]{9,10}$/; // ตัวเลข 9-10 ตัว
    if (!phoneRegex.test(customer_phone)) {
      alert("กรุณาใส่เบอร์โทรศัพท์ให้ถูกต้อง");
      return;
    }

    // เช็ควันที่ว่าต้องไม่ให้วันหมดอายุมาก่อนวันที่สร้าง
    if (new Date(expired_date) < new Date(created_date)) {
      alert("วันที่หมดอายุไม่ควรจะมาก่อนวันที่สร้าง");
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
    if (status == "ok" || status == "ok with data") {
      router.push("/home");
    } else {
      alert("re submit form!");
    }
  };

  return (
    <div>
      {/* header stepper */}
      <Stepper data={stepper} ></Stepper>

      {/* document */}
      <div className="bg-white rounded-md shadow-lg flex flex-col min-w-[620px] p-6">
        {/* header */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl">สร้างใบเเจ้งหนี้</h1>
            <Input
              name="document_id"
              type="text"
              label="เลขที่เอกสาร"
              className="w-2/3 max-w-[120px]"
            />
          </div>
          <Divider className="my-4" />
          <div className="grid grid-cols-[2fr_8fr] gap-4">
            <div className="w-full">ข้อมูลลูกค้า</div>

            <div className="grid grid-cols-[1fr_1fr_1fr] gap-4">
              <Input
                name="customer_name"
                type="text"
                label="ชื่อลูกค้า"
                className="w-full"
              />
              <DatePicker
                name="created_date"
                label="วันที่สร้าง"
                className="max-w-xs"
              />
              <DatePicker
                name="expired_date"
                label="วันที่หมดอายุ"
                className="max-w-xs"
              />
              <Input
                name="customer_address"
                type="text"
                label="ที่อยู่"
                className="w-full"
              />
              <Input
                name="customer_phone"
                type="text"
                label="เบอร์โทร"
                className="w-full"
              />
            </div>
          </div>
          <Divider className="my-4" />

          <div className="grid grid-cols-[2fr_8fr] gap-4">
            <div className="w-full">ข้อมูลและราคาภาษี</div>
            <div className="grid grid-cols-[1fr_1fr_1fr]">
              <Select label="ประเภทราคา" className="max-w-xs w-full">
                {price_tax.map((type) => (
                  <SelectItem key={type}>{type}</SelectItem>
                ))}
              </Select>
            </div>
          </div>

          <Divider className="my-4" />

          <div className="grid grid-cols-[1fr_3fr_6fr]">
            <div className="w-full none">รายการ</div>
            <Input name="" type="text" label="ชื่อสินค้า" className="w-full" />
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] ">
              <Input name="" type="text" label="จำนวน" className="w-full" />
              <Input
                name=""
                type="text"
                label="ราคา/หน่วย"
                className="w-full"
              />
              <Input
                name=""
                type="text"
                label="ส่วนลด/หน่วย"
                className="w-full"
              />
              <Input
                name=""
                type="text"
                label="มูลค่าก่อนภาษี"
                className="w-full"
              />
              <Input
                name=""
                type="text"
                label="หัก ณ ที่จ่าย"
                className="w-full"
              />

              <Button type="submit" color="secondary" size="lg">
                ลบ
              </Button>
            </div>
          </div>
          <Divider className="my-4" />

          <div className="grid grid-cols-[0.1fr_1fr] gap-8">
            <Button type="submit" bg-violet-700>เพิ่มรายการใหม่</Button>
          </div>

          <Divider className="my-4" />

          <div className="grid grid-cols-[1fr_3fr_6fr] gap-4">
            <div className="w-full">สรุปข้อมูล</div>
            <Input
              name="customer_phone"
              type="text"
              label="ส่วนลดรวม"
              className="w-full"
            />
            <div className="grid grid-cols-[8fr]">
              <Input
                name="customer_phone"
                type="text"
                label="จำนวนเงินทั้งสิ้น"
                className="w-full"
              />
            </div>
          </div>

          <Divider className="my-4" />

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

          <Divider className="my-4" />

          <div className="grid grid-cols-[7fr_3fr] gap-4">
            <div></div>
            <div className="grid grid-cols-[1fr_1fr_1fr]  gap-4">
              <Button type="submit">ยกเลิก</Button>
              <Button type="submit">บันทึกร่าง</Button>
              <Button type="submit">อนุมัติใบเเจ้งหนี้</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
