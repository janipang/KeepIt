"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";

type MenuItem = { [key: string]: string | MenuItem[] };

interface NestedDropdownProps {
  items: MenuItem[];
}

const mobileFirstPriority = [
  { หน้าหลัก: "home" },
  {
    รายรับ: [
      { ดูภาพรวม: "income" },
      {
        ใบเสนอราคา: [
          { สร้าง: "income" },
          { ยอมรับ: "income" },
          { รอตอบรับ: "income" },
          { พ้นกำหนด: "income" },
          { ดูทั้งหมด: "income" },
        ],
      },
      {
        ใบแจ้งหนี้: [
          { สร้าง: "income" },
          { ยอมรับ: "income" },
          { รอตอบรับ: "income" },
          { พ้นกำหนด: "income" },
          { ดูทั้งหมด: "income" },
        ],
      },
      {
        ใบเสร็จรับเงิน: [
          { สร้าง: "income" },
          { ชำระเงินแล้ว: "income" },
          { ดูทั้งหมด: "income" },
        ],
      },
      {
        ใบกำกับภาษีขาย: [
          { สร้าง: "income" },
          { ชำระเงินแล้ว: "income" },
          { ดูทั้งหมด: "income" },
        ],
      },
    ],
  },
  {
    รายจ่าย: [
      { ดูภาพรวม: "expense" },
      {
        ใบสั่งซื้อ: [
          { สร้าง: "income" },
          { อนุมัติแล้ว: "income" },
          { รออนุมัติ: "income" },
          { ดูทั้งหมด: "income" },
        ],
      },
      {
        ใบกำกับภาษีซื้อ: [
          { อนุมัติแล้ว: "income" },
          { รออนุมัติ: "income" },
          { ดูทั้งหมด: "income" },
        ],
      },
    ],
  },
  {
    ตั้งค่า: [
      { "อัปเกรด/ต่ออายุ": "-" },
      { ตั้งค่าองค์กร: [{ ข้อมูลกิจการ: "-" }, { โลโก้เเละตราประทับ: "-" }] },
      { ตั้งค่าผู้ใช้งาน: "-" },
      { ตั้งค่าเอกสาร: [{ ข้อมูลกิจการ: "-" }, { โลโก้เเละตราประทับ: "-" }] },
      { ลงทะเบียนสำนักงานบัญชี: "-" },
    ],
  },
  { เพิ่มเติม: "more" },
];

const mobileSecondPriority = [
  {
    ผู้ติดต่อ: [{ ดูภาพรวม: "contact" }, { เพิ่มผู้ติดต่อใหม่: "newcontact" }],
  },
  { สินค้า: [{ ดูภาพรวม: "-" }, { "เพิ่มสินค้า/บริการ": "-" }] },
  {
    การเงิน: [
      { ดูภาพรวม: "-" },
      { "เงินสด/ธนาคาร/e-Wallet": [{ ดูภาพรวม: "-" }, { เพิ่มช่องทาง: "-" }] },
    ],
  },
  {
    บัญชี: [
      { ผังบัญชี: "-" },
      { บัญชีเเยกประเภท: "-" },
      { งบเเสดงฐานะการเงิน: "-" },
      { งบกำไรขาดทุน: "-" },
      { งบกระเเสเงินสด: "-" },
    ],
  },
];

const windowFirstPriority:MenuItem[] = [
  { หน้าหลัก: "home" },
  {
    รายรับ: [
      { ดูภาพรวม: "income" },
      {
        ใบเสนอราคา: [
          { สร้าง: "income" },
          { ยอมรับ: "income" },
          { รอตอบรับ: "income" },
          { พ้นกำหนด: "income" },
          { ดูทั้งหมด: "income" },
        ],
      },
      {
        ใบแจ้งหนี้: [
          { สร้าง: "income" },
          { ยอมรับ: "income" },
          { รอตอบรับ: "income" },
          { พ้นกำหนด: "income" },
          { ดูทั้งหมด: "income" },
        ],
      },
      {
        ใบเสร็จรับเงิน: [
          { สร้าง: "income" },
          { ชำระเงินแล้ว: "income" },
          { ดูทั้งหมด: "income" },
        ],
      },
      {
        ใบกำกับภาษีขาย: [
          { สร้าง: "income" },
          { ชำระเงินแล้ว: "income" },
          { ดูทั้งหมด: "income" },
        ],
      },
    ],
  },
  {
    รายจ่าย: [
      { ดูภาพรวม: "expense" },
      {
        ใบสั่งซื้อ: [
          { สร้าง: "income" },
          { อนุมัติแล้ว: "income" },
          { รออนุมัติ: "income" },
          { ดูทั้งหมด: "income" },
        ],
      },
      {
        ใบกำกับภาษีซื้อ: [
          { อนุมัติแล้ว: "income" },
          { รออนุมัติ: "income" },
          { ดูทั้งหมด: "income" },
        ],
      },
    ],
  },
  {
    ผู้ติดต่อ: [{ ดูภาพรวม: "contact" }, { เพิ่มผู้ติดต่อใหม่: "newcontact" }],
  },
  { สินค้า: [{ ดูภาพรวม: "-" }, { "เพิ่มสินค้า/บริการ": "-" }] },
  {
    การเงิน: [
      { ดูภาพรวม: "-" },
      { "เงินสด/ธนาคาร/e-Wallet": [{ ดูภาพรวม: "-" }, { เพิ่มช่องทาง: "-" }] },
    ],
  },
  {
    บัญชี: [
      { ผังบัญชี: "-" },
      { บัญชีเเยกประเภท: "-" },
      { งบเเสดงฐานะการเงิน: "-" },
      { งบกำไรขาดทุน: "-" },
      { งบกระเเสเงินสด: "-" },
    ],
  },
  {
    ตั้งค่า: [
      { "อัปเกรด/ต่ออายุ": "-" },
      { ตั้งค่าองค์กร: [{ ข้อมูลกิจการ: "-" }, { โลโก้เเละตราประทับ: "-" }] },
      { ตั้งค่าผู้ใช้งาน: "-" },
      { ตั้งค่าเอกสาร: [{ ข้อมูลกิจการ: "-" }, { โลโก้เเละตราประทับ: "-" }] },
      { ลงทะเบียนสำนักงานบัญชี: "-" },
    ],
  }
];

const NestedDropdown: React.FC<NestedDropdownProps> = ({ items }) => {
  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => {
      // get all keys in items then choose the first one
      const key = Object.keys(item)[0];
      const value = item[key];

      if (Array.isArray(value)) {
        // If the value is an array, it means we need to render a nested menu
        return (
          <Dropdown key={index}>
            <DropdownTrigger>
              <Button variant="flat">{key}</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label={key}>
              {renderMenuItems(value)}
            </DropdownMenu>
          </Dropdown>
        );
      } else {
        // Otherwise, it's a regular menu item
        return (
          <DropdownItem key={index} onClick={() => alert(value)}>
            {key}
          </DropdownItem>
        );
      }
    });
  };

  return <>{renderMenuItems(items)}</>;
};


function MobileNav() {
  return (
    <div>
      {/* <NestedDropdown /> */}
    </div>
  );
}

function WindowNav() {
  return (
    <div>
      <NestedDropdown items={windowFirstPriority} />
    </div>
  );
}

export default function NavBar() {
  return (
    <>
      <nav className="w-screen">
        {/* <MobileNav /> */}
        <WindowNav />
      </nav>
    </>
  );
}
