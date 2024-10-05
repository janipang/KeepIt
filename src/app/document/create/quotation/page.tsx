"use client";
import { radioUncheckedIcon } from "@/components/icons";
import Stepper from "@/components/stepper";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { DatePicker } from "@nextui-org/date-picker";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { QuotationInfo } from "@/types/DocumentInfo";
import { postQuotation } from "@/services/createDocument";

export default function Quotation() {
  const router = useRouter();
  const stepper = ["ใบเสนอราคา", "ใบแจ้งหนี้", "ใบเสร็จรับเงิน", "ใบกำกับภาษี"];
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
    // validating
    if (customer_name == "") {
      alert("enter password");
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
    if (status == "ok" || status == "ok with data") {
      router.push("/home");
    } else {
      alert("re submit form!");
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 justify-start items-center md:p-6 lg:p-12">
      {/* header stepper */}
      <Stepper data={stepper} />

      {/* document */}
      <div className="w-full bg-white rounded-md shadow-lg flex flex-col min-w-[620px] p-6">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <h1 className="text-2xl">สร้างใบเสนอราคา</h1>
            <Input
              name="document_id"
              type="text"
              label="เลขที่เอกสาร"
              className="w-2/3 max-w-[150px]"
            />
          </div>

          <Divider className="my-4" />

          <div className="grid grid-cols-[2fr_8fr] gap-4">
            <div className="w-full">ข้อมูลลูกค้า</div>
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-4">
              <Input
                name="customer_name"
                type="text"
                label="เลขที่เอกสาร"
                className="w-full"
              />
              <DatePicker
                name="created_date"
                label="Birth date"
                className="w-full"
              />
              <DatePicker
                name="expired_date"
                label="Birth date"
                className="w-full"
              />
              <Input
                name="customer_address"
                type="text"
                label="ที่อยู่"
                className="full"
              />
              <Input
                name="customer_phone"
                type="text"
                label="เบอร์โทร"
                className="full"
              />
            </div>
          </div>

          <Divider className="my-4" />

          <div className="grid grid-cols-[2fr_8fr] gap-4">
            <div className="w-full">ข้อมูลและราคาภาษี</div>
            <div className="grid grid-cols-[1fr_1fr_1fr]">
              <Select label="ประเภทราคา" className="max-w-xs">
                {price_tax.map((type) => (
                  <SelectItem key={type}>{type}</SelectItem>
                ))}
              </Select>
            </div>
          </div>

          <Divider className="my-4" />

          <Input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
