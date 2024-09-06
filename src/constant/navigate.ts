import MenuItem from "@/type/MenuItem";

const mobileMainNavData: MenuItem[] = [
    {
        id: 1000,
        name: "หน้าหลัก",
        path: "/home",
        child: [],
    },
    {
        id: 2000,
        name: "รายรับ",
        path: "",
        child: [
            { id: 2100, name: "ดูภาพรวม", path: "/income", child: [] },
            {
                id: 2200,
                name: "ใบเสนอราคา",
                path: "",
                child: [
                    { id: 2210, name: "สร้าง", path: "/income", child: [] },
                    { id: 2220, name: "ยอมรับ", path: "/income", child: [] },
                    { id: 2230, name: "รอตอบรับ", path: "/income", child: [] },
                    { id: 2240, name: "พ้นกำหนด", path: "/income", child: [] },
                    { id: 2250, name: "ดูทั้งหมด", path: "/income", child: [] },
                ],
            },
            {
                id: 2300,
                name: "ใบแจ้งหนี้",
                path: "",
                child: [
                    { id: 2310, name: "สร้าง", path: "/income", child: [] },
                    { id: 2320, name: "ยอมรับ", path: "/income", child: [] },
                    { id: 2330, name: "รอตอบรับ", path: "/income", child: [] },
                    { id: 2340, name: "พ้นกำหนด", path: "/income", child: [] },
                    { id: 2350, name: "ดูทั้งหมด", path: "/income", child: [] },
                ],
            },
            {
                id: 2400,
                name: "ใบเสร็จรับเงิน",
                path: "",
                child: [
                    { id: 2410, name: "สร้าง", path: "/income", child: [] },
                    { id: 2420, name: "ชำระเงินแล้ว", path: "/income", child: [] },
                    { id: 2430, name: "ดูทั้งหมด", path: "/income", child: [] },
                ],
            },
            {
                id: 2500,
                name: "ใบเสร็จรับเงิน",
                path: "",
                child: [
                    { id: 2510, name: "สร้าง", path: "/income", child: [] },
                    { id: 2520, name: "ชำระเงินแล้ว", path: "/income", child: [] },
                    { id: 2530, name: "ดูทั้งหมด", path: "/income", child: [] },
                ],
            },
        ],
    }, {
        id: 3000,
        name: "รายจ่าย",
        path: "",
        child: [
            { id: 3100, name: "ดูภาพรวม", path: "/income", child: [] },
            {
                id: 3200,
                name: "ใบสั่งซื้อ",
                path: "",
                child: [
                    { id: 3210, name: "สร้าง", path: "/income", child: [] },
                    { id: 3220, name: "อนุมัติแล้ว", path: "/income", child: [] },
                    { id: 3230, name: "รออนุมัติ", path: "/income", child: [] },
                    { id: 3240, name: "ดูภาพรวม", path: "/income", child: [] },
                ],
            },
            {
                id: 3300,
                name: "ใบกำกับภาษีซื้อ",
                path: "",
                child: [
                    { id: 3310, name: "อนุมัติแล้ว", path: "/income", child: [] },
                    { id: 3320, name: "รออนุมัติ", path: "/income", child: [] },
                    { id: 3330, name: "ดูทั้งหมด", path: "/income", child: [] },
                ],
            },
        ],
    },{
        id: 4000,
        name: "ตั้งค่า",
        path: "",
        child: [
            { id: 4100, name: "อัปเกรด/ต่ออายุ", path: "/income", child: [] },
            {
                id: 4200,
                name: "ตั้งค่าองค์กร",
                path: "",
                child: [
                    { id: 4210, name: "ข้อมูลกิจการ", path: "/income", child: [] },
                    { id: 4220, name: "โลโก้เเละตราประทับ", path: "/income", child: [] },
                ],
            },
            { id: 4300, name: "ตั้งค่าผู้ใช้งาน", path: "/income", child: [] },
            {
                id: 4400,
                name: "ตั้งค่าองค์กร",
                path: "",
                child: [
                    { id: 4410, name: "ข้อมูลกิจการ", path: "/income", child: [] },
                    { id: 4420, name: "โลโก้เเละตราประทับ", path: "/income", child: [] },
                ],
            },
            { id: 4500, name: "ลงทะเบียนสำนักงานบัญชี", path: "/income", child: [] }]
    },
    {
        id: 5000,
        name: "เพิ่มเติม",
        path: "/more",
        child: [],
    }
];

const mobileSubNavData: MenuItem[] = [
    {
        id: 6000,
        name: "ผู้ติดต่อ",
        path: "/more",
        child: [{
            id: 6100,
            name: "ดูภาพรวม",
            path: "/contact",
            child: [],
        },{
            id: 6200,
            name: "เพิ่มผู้ติดต่อใหม่",
            path: "/newcontact",
            child: [],
        }],
    },{
        id: 7000,
        name: "สินค้า",
        path: "",
        child: [{
            id: 7100,
            name: "ดูภาพรวม",
            path: "-",
            child: [],
        },{
            id: 7200,
            name: "เพิ่มสินค้า/บริการ",
            path: "-",
            child: [],
        }],
    },{
        id: 8000,
        name: "การเงิน",
        path: "",
        child: [{
            id: 8100,
            name: "ดูภาพรวม",
            path: "-",
            child: [],
        },{
            id: 8200,
            name: "เงินสด/ธนาคาร/e-Wallet",
            path: "-",
            child: [{
                id: 8100,
                name: "ดูภาพรวม",
                path: "/-",
                child: [],
            },{
                id: 8200,
                name: "เพิ่มช่องทาง",
                path: "/-",
                child: [],
            }],
        }],
    },{
        id: 9000,
        name: "บัญชี",
        path: "",
        child: [{
            id: 9100,
            name: "ผังบัญชี",
            path: "-",
            child: [],
        },{
            id: 9200,
            name: "บัญชีเเยกประเภท",
            path: "-",
            child: [],
        },{
            id: 9300,
            name: "งบเเสดงฐานะการเงิน",
            path: "-",
            child: [],
        },{
            id: 9400,
            name: "งบกำไรขาดทุน",
            path: "-",
            child: [],
        },{
            id: 9500,
            name: "งบกระเเสเงินสด",
            path: "-",
            child: [],
        }],
    },
    {
        id: 10000,
        name: "คลังเอกสาร",
        path: "/docsarchive",
        child: [],
    }
];

const navData: MenuItem[] = [
    {
        id: 1000,
        name: "หน้าหลัก",
        path: "/home",
        child: [],
    },
    {
        id: 2000,
        name: "รายรับ",
        path: "",
        child: [
            { id: 2100, name: "ดูภาพรวม", path: "/income", child: [] },
            {
                id: 2200,
                name: "ใบเสนอราคา",
                path: "",
                child: [
                    { id: 2210, name: "สร้าง", path: "/income", child: [] },
                    { id: 2220, name: "ยอมรับ", path: "/income", child: [] },
                    { id: 2230, name: "รอตอบรับ", path: "/income", child: [] },
                    { id: 2240, name: "พ้นกำหนด", path: "/income", child: [] },
                    { id: 2250, name: "ดูทั้งหมด", path: "/income", child: [] },
                ],
            },
            {
                id: 2300,
                name: "ใบแจ้งหนี้",
                path: "",
                child: [
                    { id: 2310, name: "สร้าง", path: "/income", child: [] },
                    { id: 2320, name: "ยอมรับ", path: "/income", child: [] },
                    { id: 2330, name: "รอตอบรับ", path: "/income", child: [] },
                    { id: 2340, name: "พ้นกำหนด", path: "/income", child: [] },
                    { id: 2350, name: "ดูทั้งหมด", path: "/income", child: [] },
                ],
            },
            {
                id: 2400,
                name: "ใบเสร็จรับเงิน",
                path: "",
                child: [
                    { id: 2410, name: "สร้าง", path: "/income", child: [] },
                    { id: 2420, name: "ชำระเงินแล้ว", path: "/income", child: [] },
                    { id: 2430, name: "ดูทั้งหมด", path: "/income", child: [] },
                ],
            },
            {
                id: 2500,
                name: "ใบเสร็จรับเงิน",
                path: "",
                child: [
                    { id: 2510, name: "สร้าง", path: "/income", child: [] },
                    { id: 2520, name: "ชำระเงินแล้ว", path: "/income", child: [] },
                    { id: 2530, name: "ดูทั้งหมด", path: "/income", child: [] },
                ],
            },
        ],
    }, {
        id: 3000,
        name: "รายจ่าย",
        path: "",
        child: [
            { id: 3100, name: "ดูภาพรวม", path: "/income", child: [] },
            {
                id: 3200,
                name: "ใบสั่งซื้อ",
                path: "",
                child: [
                    { id: 3210, name: "สร้าง", path: "/income", child: [] },
                    { id: 3220, name: "อนุมัติแล้ว", path: "/income", child: [] },
                    { id: 3230, name: "รออนุมัติ", path: "/income", child: [] },
                    { id: 3240, name: "ดูภาพรวม", path: "/income", child: [] },
                ],
            },
            {
                id: 3300,
                name: "ใบกำกับภาษีซื้อ",
                path: "",
                child: [
                    { id: 3310, name: "อนุมัติแล้ว", path: "/income", child: [] },
                    { id: 3320, name: "รออนุมัติ", path: "/income", child: [] },
                    { id: 3330, name: "ดูทั้งหมด", path: "/income", child: [] },
                ],
            },
        ],
    },{
        id: 4000,
        name: "ผู้ติดต่อ",
        path: "/more",
        child: [{
            id: 4100,
            name: "ดูภาพรวม",
            path: "/contact",
            child: [],
        },{
            id: 4200,
            name: "เพิ่มผู้ติดต่อใหม่",
            path: "/newcontact",
            child: [],
        }],
    },{
        id: 5000,
        name: "สินค้า",
        path: "",
        child: [{
            id: 5100,
            name: "ดูภาพรวม",
            path: "-",
            child: [],
        },{
            id: 5200,
            name: "เพิ่มสินค้า/บริการ",
            path: "-",
            child: [],
        }],
    },{
        id: 6000,
        name: "การเงิน",
        path: "",
        child: [{
            id: 6100,
            name: "ดูภาพรวม",
            path: "-",
            child: [],
        },{
            id: 6200,
            name: "เงินสด/ธนาคาร/e-Wallet",
            path: "-",
            child: [{
                id: 6210,
                name: "ดูภาพรวม",
                path: "/-",
                child: [],
            },{
                id: 6220,
                name: "เพิ่มช่องทาง",
                path: "/-",
                child: [],
            }],
        }],
    },{
        id: 7000,
        name: "บัญชี",
        path: "",
        child: [{
            id: 7100,
            name: "ผังบัญชี",
            path: "-",
            child: [],
        },{
            id: 7200,
            name: "บัญชีเเยกประเภท",
            path: "-",
            child: [],
        },{
            id: 7300,
            name: "งบเเสดงฐานะการเงิน",
            path: "-",
            child: [],
        },{
            id: 7400,
            name: "งบกำไรขาดทุน",
            path: "-",
            child: [],
        },{
            id: 7500,
            name: "งบกระเเสเงินสด",
            path: "-",
            child: [],
        }],
    },{
        id: 8000,
        name: "ตั้งค่า",
        path: "",
        child: [
            { id: 8100, name: "อัปเกรด/ต่ออายุ", path: "/income", child: [] },
            {
                id: 8200,
                name: "ตั้งค่าองค์กร",
                path: "",
                child: [
                    { id: 8210, name: "ข้อมูลกิจการ", path: "/income", child: [] },
                    { id: 8220, name: "โลโก้เเละตราประทับ", path: "/income", child: [] },
                ],
            },
            { id: 8300, name: "ตั้งค่าผู้ใช้งาน", path: "/income", child: [] },
            {
                id: 8400,
                name: "ตั้งค่าองค์กร",
                path: "",
                child: [
                    { id: 8410, name: "ข้อมูลกิจการ", path: "/income", child: [] },
                    { id: 8420, name: "โลโก้เเละตราประทับ", path: "/income", child: [] },
                ],
            },
            { id: 8500, name: "ลงทะเบียนสำนักงานบัญชี", path: "/income", child: [] }]
    },
    {
        id: 9000,
        name: "คลังเอกสาร",
        path: "/docsarchive",
        child: [],
    }
];

export { mobileMainNavData, mobileSubNavData, navData };