import { ItemType } from "@/types/enum";
import { ProductInfo } from "@/types/Product";

export const products:ProductInfo[] = [{
    id: "pd001",
    itemName: "banana",
    itemDescription: "cool banana",
    itemType: ItemType.PRODUCT,
    unitType: "ลูก",
    imgData: "banana.png",
    price: 12,
    quantity: 120,
},{
    id: "pd002",
    itemName: "coconut",
    itemDescription: "cool banana",
    itemType: ItemType.PRODUCT,
    unitType: "ลูก",
    imgData: "banana.png",
    price: 12,
    quantity: 120,
},{
    id: "pd003",
    itemName: "mango",
    itemDescription: "cool banana",
    itemType: ItemType.PRODUCT,
    unitType: "ลูก",
    imgData: "banana.png",
    price: 12,
    quantity: 120,
},]