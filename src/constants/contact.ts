const columns = [
    { name: "เลขที่", uid: "id", sortable: true },
    { name: "ชื่อ", uid: "name", sortable: true },
    { name: "บริษัท", uid: "company", sortable: true },
    { name: "อีเมล", uid: "email" },
    { name: "เบอร์", uid: "phone" },
    { name: "ความสัมพันธ์", uid: "relation" },
    { name: "คำสั่ง", uid: "actions" },
];

const statusOptions = [
    { name: "Active", uid: "active" },
    { name: "Paused", uid: "paused" },
    { name: "Vacation", uid: "vacation" },
];

export interface UserType{
    id: number;
    name: string;
    company: string;
    email: string;
    phone: string;
    avatar: string;
    relation: string;
}
const users:UserType[] = [
    {
        id: 1,
        name: "Tony Reichert",
        company: "exxon",
        email: "tony.reichert@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        relation: "customer"
    },
    {
        id: 2,
        name: "Zoey Lang",
        company: "scbx",
        email: "zoey.lang@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        relation: "provider"
    },
    {
        id: 3,
        name: "Jane Fisher",
        company: "cpall",
        email: "jane.fisher@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        relation: "customer"
    },
    {
        id: 4,
        name: "William Howard",
        company: "cpall",
        email: "william.howard@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        relation: "provider"
    },
    {
        id: 5,
        name: "Kristen Copper",
        company: "cpf",
        email: "kristen.cooper@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        relation: "customer"
    },
    {
        id: 6,
        name: "Brian Kim",
        company: "agoda",
        email: "brian.kim@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        relation: "customer",
    },
    {
        id: 7,
        name: "Michael Hunt",
        company: "shopee",
        email: "michael.hunt@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
        relation: "customer"
    },
    {
        id: 8,
        name: "Samantha Brooks",
        company: "lazada",
        email: "michael.hunt@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
        relation: "provider"
    },
    {
        id: 9,
        name: "Frank Harrison",
        company: "donut",
        email: "frank.harrison@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?img=4",
        relation: "provider"
    },
    {
        id: 10,
        name: "Emma Adams",
        company: "ronson",
        email: "emma.adams@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?img=5",
        relation: "customer"
    },
    {
        id: 11,
        name: "Brandon Stevens",
        company: "banana",
        email: "brandon.stevens@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?img=8",
        relation: "provider"
    },
    {
        id: 12,
        name: "Megan Richards",
        company: "lenovo",
        email: "megan.richards@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?img=10",
        relation: "customer"
    },
    {
        id: 13,
        name: "Oliver Scott",
        company: "tops",
        email: "oliver.scott@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?img=12",
        relation: "provider"
    },
    {
        id: 14,
        name: "Grace Allen",
        company: "evonc",
        email: "grace.allen@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?img=16",
        relation: "customer"
    },
    {
        id: 15,
        name: "Noah Carter",
        company: "tesla",
        email: "noah.carter@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?img=15",
        relation: "provider"
    },
    {
        id: 16,
        name: "Ava Perez",
        company: "tesla",
        email: "ava.perez@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?img=20",
        relation: "provider"
    },
    {
        id: 17,
        name: "Liam Johnson",
        company: "central",
        email: "liam.johnson@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?img=33",
        relation: "customer"
    },
    {
        id: 18,
        name: "Sophia Taylor",
        company: "lagoos",
        email: "sophia.taylor@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?img=29",
        relation: "provider"
    },
    {
        id: 19,
        name: "Lucas Harris",
        company: "docker",
        email: "lucas.harris@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?img=50",
        relation: "provider"
    },
    {
        id: 20,
        name: "Mia Robinson",
        company: "docker",
        email: "mia.robinson@example.com",
        phone: "0895179580",
        avatar: "https://i.pravatar.cc/150?img=45",
        relation: "provider"
    }
];

export { columns, users, statusOptions };