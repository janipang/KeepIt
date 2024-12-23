import MenuItem from '@/types/MenuItem';
const navData: MenuItem[] = [
  {
    id: 1000,
    name: 'หน้าหลัก',
    path: '/home',
    child: [],
  },
  {
    id: 2000,
    name: 'รายรับ',
    path: '',
    child: [
      { id: 2100, name: 'ดูภาพรวม', path: '/income', child: [] },
      {
        id: 2200,
        name: 'ใบเสนอราคา',
        path: '',
        child: [
          {
            id: 2210,
            name: 'สร้าง',
            path: '/document/create/quotation',
            child: [],
          },
          { id: 2220, name: 'ยอมรับ', path: '/income', child: [] },
          { id: 2230, name: 'รอตอบรับ', path: '/income', child: [] },
          { id: 2240, name: 'พ้นกำหนด', path: '/income', child: [] },
          {
            id: 2250,
            name: 'ดูทั้งหมด',
            path: '/document/view/quotation',
            child: [],
          },
        ],
      },
      {
        id: 2300,
        name: 'ใบแจ้งหนี้',
        path: '',
        child: [
          {
            id: 2310,
            name: 'สร้าง',
            path: '/document/create/invoice',
            child: [],
          },
          { id: 2320, name: 'ยอมรับ', path: '/income', child: [] },
          { id: 2330, name: 'รอตอบรับ', path: '/income', child: [] },
          { id: 2340, name: 'พ้นกำหนด', path: '/income', child: [] },
          {
            id: 2350,
            name: 'ดูทั้งหมด',
            path: '/document/view/invoice',
            child: [],
          },
        ],
      },
      {
        id: 2400,
        name: 'ใบเสร็จรับเงิน',
        path: '',
        child: [
          {
            id: 2410,
            name: 'สร้าง',
            path: '/document/create/receipt',
            child: [],
          },
          {
            id: 2420,
            name: 'ชำระเงินแล้ว',
            path: '/document/create/receipt',
            child: [],
          },
          {
            id: 2430,
            name: 'ดูทั้งหมด',
            path: '/document/create/receipt',
            child: [],
          },
        ],
      },
      {
        id: 2500,
        name: 'ใบกำกับภาษี',
        path: '',
        child: [
          {
            id: 2510,
            name: 'สร้าง',
            path: '/document/create/tax-invoice',
            child: [],
          },
          { id: 2520, name: 'ชำระเงินแล้ว', path: '/expense', child: [] },
          {
            id: 2530,
            name: 'ดูทั้งหมด',
            path: '/document/view/tax-invoice',
            child: [],
          },
        ],
      },
    ],
  },
  {
    id: 3000,
    name: 'รายจ่าย',
    path: '',
    child: [
      { id: 3100, name: 'ดูภาพรวม', path: '/expense', child: [] },
      {
        id: 3200,
        name: 'ใบสั่งซื้อ',
        path: '',
        child: [
          {
            id: 3210,
            name: 'สร้าง',
            path: '/document/create/purchase-order',
            child: [],
          },
          { id: 3220, name: 'อนุมัติแล้ว', path: '/income', child: [] },
          { id: 3230, name: 'รออนุมัติ', path: '/income', child: [] },
          {
            id: 3240,
            name: 'ดูภาพรวม',
            path: '/document/view/purchase-order',
            child: [],
          },
        ],
      },
    ],
  },
  {
    id: 4000,
    name: 'ผู้ติดต่อ',
    path: '/contact',
    child: [],
  },
  {
    id: 5000,
    name: 'สินค้า',
    path: '/product',
    child: [],
  },
  {
    id: 6000,
    name: 'การเงิน',
    path: '/financial',
    child: [],
  },
  // {
  //   id: 7000,
  //   name: 'บัญชี',
  //   path: '',
  //   child: [
  //     {
  //       id: 7100,
  //       name: 'ผังบัญชี',
  //       path: '-',
  //       child: [],
  //     },
  //     {
  //       id: 7200,
  //       name: 'บัญชีเเยกประเภท',
  //       path: '-',
  //       child: [],
  //     },
  //     {
  //       id: 7300,
  //       name: 'งบเเสดงฐานะการเงิน',
  //       path: '-',
  //       child: [],
  //     },
  //     {
  //       id: 7400,
  //       name: 'งบกำไรขาดทุน',
  //       path: '-',
  //       child: [],
  //     },
  //     {
  //       id: 7500,
  //       name: 'งบกระเเสเงินสด',
  //       path: '-',
  //       child: [],
  //     },
  //   ],
  // },
  {
    id: 8000,
    name: 'ตั้งค่า',
    path: '',
    child: [
      { id: 8100, name: 'อัปเกรด/ต่ออายุ', path: '/setting/entend', child: [] },
      {
        id: 8200,
        name: 'ตั้งค่าองค์กร',
        path: '',
        child: [
          {
            id: 8210,
            name: 'ข้อมูลกิจการ',
            path: '/setting/exterprise',
            child: [],
          },
          {
            id: 8220,
            name: 'โลโก้เเละตราประทับ',
            path: '/setting/logo',
            child: [],
          },
        ],
      },
      { id: 8300, name: 'ตั้งค่าผู้ใช้งาน', path: '/setting/user', child: [] },
      {
        id: 8400,
        name: 'ตั้งค่าองค์กร',
        path: '',
        child: [
          { id: 8410, name: 'ข้อมูลกิจการ', path: '/income', child: [] },
          { id: 8420, name: 'โลโก้เเละตราประทับ', path: '/income', child: [] },
        ],
      },
      { id: 8500, name: 'ลงทะเบียนสำนักงานบัญชี', path: '/income', child: [] },
    ],
  },
  {
    id: 9000,
    name: 'คลังเอกสาร',
    path: '/document',
    child: [],
  },
];

export { navData };
