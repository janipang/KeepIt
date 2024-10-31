'use client';

import { Avatar, Divider } from '@nextui-org/react';
import BillBoard from '../document/billboard';
import { MailIcon } from '../icons';
import { PhoneIcon } from '../icons';
import Image from 'next/image';
import Loading from '../loading';

interface Props {
  data: any;
}

export default function QuotationFormat({ data }: Props) {
  if (!data) {
    return <Loading />;
  }

  return (
    <div className="pb-[calc(297/210*100%)] relative overflow-hidden bg-white rounded-md shadow-lg flex flex-col transform origin-top min-w-[600px] w-[140vw] scale-[0.67] md:w-[120vw] md:scale-[0.78] lg:w-full lg:scale-100">
      <div className="absolute inset-0 w-full py-10 px-20 flex-col flex gap-6">
        <h1 className="text-3xl">ใบเสนอราคา</h1>

        <div className="grid grid-cols-[3fr_2fr] gap-4">
          <div className="flex flex-col w-full">
            {/* start part contact */}
            <div className="grid grid-cols-[3fr_2fr] gap-8 w-full">
              <div className="flex flex-col w-full gap-2">
                <span className="flex gap-4">
                  <p className="w-1/3 font-semibold">ผู้ขาย</p>
                  <p className="w-2/3">แป้งขายไก่ย่าง (main)</p>
                </span>
                <span className="flex gap-4">
                  <p className="w-1/3 font-semibold">ที่อยู่</p>
                  <p className="w-2/3">ลาดกระบังถนนใหญ่</p>
                </span>
                <span className="flex gap-4">
                  <p className="w-1/3 font-semibold">เลขที่ภาษี</p>
                  <p className="w-2/3">0987654321098</p>
                </span>
              </div>

              <div className="flex flex-col w-full gap-2">
                <span className="flex gap-2">
                  <PhoneIcon />
                  <p>0987654321</p>
                </span>
                <span className="flex gap-2">
                  <MailIcon />
                  <p>pang-khaikaiyang@gmail.com</p>
                </span>
              </div>
            </div>

            <Divider className="my-6" />

            <div className="grid grid-cols-[3fr_2fr] gap-8 w-full">
              <div className="flex flex-col w-full gap-2">
                <span className="flex gap-4">
                  <p className="w-1/3 font-semibold">ลูกค้า</p>
                  <p className="w-2/3">แป้งขายไก่</p>
                </span>
                <span className="flex gap-4">
                  <p className="w-1/3 font-semibold">ที่อยู่</p>
                  <p className="w-2/3">
                    ถนนฉลองกรุง เขตลาดกระบัง กรุงเทพฯ 10520, ประเทศไทย
                  </p>
                </span>
                <span className="flex gap-4">
                  <p className="w-1/3 font-semibold">เลขที่ภาษี</p>
                  <p className="w-2/3">1234567891230</p>
                </span>
                <span className="flex gap-4">
                  <p className="w-1/3 font-semibold">เรียนคุณ</p>
                  <p className="w-2/3">อรชร มั่งมีชัย</p>
                </span>
              </div>

              <div className="flex flex-col w-full">
                <span className="flex gap-2">
                  <PhoneIcon />
                  <p>0955236845</p>
                </span>
                <span className="flex gap-2">
                  <MailIcon />
                  <p>optional@email.com</p>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="rounded-md bg-primary/20 p-3 flex flex-col text-black w-full">
              <span className="flex gap-4">
                <p className="w-1/3 font-semibold">เลขที่เอกสาร</p>
                <p className="w-2/3">QO00000000569</p>
              </span>
              <span className="flex gap-4">
                <p className="w-1/3 font-semibold">วันที่ออก</p>
                <p className="w-2/3">2024-10-31</p>
              </span>
              <span className="flex gap-4">
                <p className="w-1/3 font-semibold">ใช้ได้ถึง</p>
                <p className="w-2/3">2024-10-31</p>
              </span>
              <span className="flex gap-4">
                <p className="w-1/3 font-semibold">อ้างอิง</p>
                <p className="w-2/3">-</p>
              </span>
            </div>
          </div>
        </div>
        {/* end part contact */}

        {/* start part product */}
        <div className="flex flex-col gap-4 w-full mt-10 min-h-[650px]">
          <div className="rounded-md bg-primary/20 w-full py-6 px-4 mb-4">
            <div className="grid grid-cols-[6fr_1fr_1.5fr_1fr_1.5fr] gap-2 text-start font-bold">
              <p>คำอธิบาย</p>
              <p>จำนวน</p>
              <p>ราคา</p>
              <p>VAT</p>
              <p>ราคารวม</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            {[
              {
                itemID: '67222f3506b3b762257a62cd',
                name: 'ไก่อบโอ่ง',
                quantity: 30,
                pricePerUnit: 120,
                taxRate: 10,
                totalCost: 3600,
              },
              {
                itemID: '6722301106b3b762257a62db',
                name: 'น้ำจิ้ม',
                quantity: 25,
                pricePerUnit: 55,
                taxRate: 10,
                totalCost: 1375,
              },
            ].map((product: any, index: number) => (
              <div key={index} className="grid grid-cols-[6fr_1fr_1.5fr_1fr_1.5fr] gap-2 text-start px-4">
                <div className="min-h-14 grid grid-cols-[50px_1fr]">
                  <Avatar src={'product.imgdata?'} className="aspect-square" />
                  <span className="flex flex-col gap-1">
                    <p className="font-semibold">{product.name}</p>
                    <p>
                      ฟาร์มไก่ถนนฉลองกรุง เขตลาดกระบัง กรุงเทพฯ 10520, ประเทศ
                    </p>
                  </span>
                </div>
                <p>{product.quantity}</p>
                <p>{product.pricePerUnit}</p>
                <p>{product.taxRate} % </p>
                <p>{product.totalCost}</p>
              </div>
            ))}
          </div>
        </div>
        {/* end part product */}

        <Divider className="my-6" />

        {/* start part summary */}
        <div className="grid grid-cols-[1fr_9fr] gap-4 w-full">
          <p className="font-semibold">สรุป</p>
          <div className="flex flex-col w-full gap-2 items-end">
            <div className="w-1/3 flex flex-col gap-4">
              <BillBoard title="จำนวนเงินทั้งสิ้น" amount={12000} unit="บาท" />
              <span className="pl-4 flex gap-2">
                <p className="w-2/3 font-semibold">มูลค่าภาษี</p>
                <p className="w-1/3">840 บาท</p>
              </span>
              <span className="pl-4 flex gap-2">
                <p className="w-2/3 font-semibold">จำนวนเงินที่ชำระ</p>
                <p className="w-1/3">12000 บาท</p>
              </span>
            </div>
          </div>
        </div>
        {/* end part summary */}

        <Divider className="my-6" />

        <div className="grid grid-cols-[1fr_9fr] gap-4 w-full">
          <p className="font-semibold">ชำระเงิน</p>
          <div></div>
        </div>

        <Divider className="my-6" />

        <div className="grid grid-cols-[1fr_9fr] gap-4 w-full">
          <p className="font-semibold">หมายเหตุ</p>
          <div>
            <p>เอกสารฉบับนี้ใช้ติดต่อกับกลุ่มพันธมิตรทางธุรกิจเท่านั้น</p>
          </div>
        </div>

        <Divider className="my-6" />

        {/* start part footer */}
        <div className="grid grid-cols-[1fr_9fr] gap-4 w-full">
          <p className="font-semibold">รับรอง</p>
          <div className="w-full flex flex-col gap-4">
            <p>
              มั่นใจทุกการใช้งานด้วย keep ระบบจัการบัญชีมืออาชี สะดวก ทุกที่
              ทุกเวลา หมดกังวลใจเรื่องเอกสาร
            </p>
            <div className="flex justify-between">
              <div className="flex gap-2 items-end">
                <Image
                  src="/qr/docs-footer-qr.png"
                  alt="footer-qr"
                  width="150"
                  height="150"
                />
                <div className="flex flex-col gap-2">
                  <p>KEEP accounting</p>
                  <p>By A-14 Developers team</p>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <div className="flex flex-col gap-2 items-end">
                  <p>Join our new product</p>
                  <p>@ sathorn, bangkok</p>
                </div>
                <Image
                  src="/qr/docs-footer-qr.png"
                  alt="footer-qr"
                  width="150"
                  height="150"
                />
              </div>
            </div>
          </div>
        </div>
        {/* end part footer */}
      </div>
    </div>
  );
}
