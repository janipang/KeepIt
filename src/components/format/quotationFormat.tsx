import {
  Avatar,
  Button,
  DatePicker,
  Divider,
  Input,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react';
import BillBoard from '../document/billboard';
import { MailIcon, PersonIcon, PlusIcon } from '../icons';
import ProductEditTable from '../table/product-edit-table';
import Document from '../document';
import { PhoneIcon } from 'lucide-react';

interface Props {
  data: {};
}

export default function QuotationFormat({ data }: Props) {
  return (
    <div className="pb-[calc(297/210*100%)] bg-white rounded-md shadow-lg flex flex-col transform origin-top min-w-[600px] p-6 w-[140vw] scale-[0.67] md:w-[120vw] md:scale-[0.78] lg:w-full lg:scale-100">
      <div className="w-full flex-col flex">
        <h1 className="text-2xl">ใบเสนอราคา</h1>
        <div className="grid grid-cols-[3fr_2fr]">
          <div><div></div><Divider/><div></div></div>
          <div className="flex flex-col">
            <div className="rounded-md bg-primary/20 p-3 flex flex-col text-black w-full">
              <span className="flex gap-4">
                <p className="w-1/3 font-semibold">เลขที่เอกสาร</p>
                <p className="w-2/3">data.documentID</p>
              </span>
              <span className="flex gap-4">
                <p className="w-1/3 font-semibold">วันที่ออก</p>
                <p className="w-2/3">data.createdDate</p>
              </span>
              <span className="flex gap-4">
                <p className="w-1/3 font-semibold">ใช้ได้ถึง</p>
                <p className="w-2/3">data.expiredDate</p>
              </span>
              <span className="flex gap-4">
                <p className="w-1/3 font-semibold">อ้างอิง</p>
                <p className="w-2/3">data.reference</p>
              </span>
            </div>
            <div className="rounded-md bg-white p-3 flex flex-col text-black w-full">
              <p className="text-lg font-semibold">ติดต่อกลับที่</p>
              <span className="flex gap-2"><PersonIcon/><p>business.name</p></span>
              <span className="flex gap-2"><PhoneIcon/><p>business.phone</p></span>
              <span className="flex gap-2"><MailIcon/><p>business.email</p></span>
            </div>
          </div>
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
          <h2 className="w-full">ข้อมูลและราคาภาษี</h2>
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-4">xxxxxxxx</div>
        </div>

        <Divider className="my-6" />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h2>รายการ</h2>
            <h3 className="text-gray-600">สินค้า/บริการ</h3>
          </div>
          <div>
            {/* table of selected products */}
            {/* <ProductEditTable products={products} /> */}
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
            <BillBoard
              variant="light"
              title="ส่วนลดรวม"
              amount={120}
              unit="บาท"
            />
            <BillBoard
              variant="primary"
              title="จำนวนเงินทั้งสิ้น"
              amount={120}
              unit="บาท"
            />
          </div>
        </div>

        <Divider className="my-6" />

        <div className="grid grid-cols-[2fr_8fr] gap-4">
          <h2 className="w-full">หมายเหตุสำหรับลูกค้า</h2>
          <div className="grid grid-cols-[1fr]">
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
          <div className="grid grid-cols-[1fr]">
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
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            <Button size="lg">ยกเลิก</Button>
            <Button size="lg" variant="solid" color="secondary">
              บันทึกร่าง
            </Button>
            <Button size="lg" type="submit" color="primary" variant="solid">
              อนุมัติใบเสนอราคา
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
