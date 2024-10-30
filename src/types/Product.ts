import { ItemType } from "./enum";

export interface ProductInfo{
  id?: string;
  itemName: string;
  itemDescription: string;
  itemType: ItemType;
  quantity?: number; //service should not have amount
  unitType: string; //กิโล, ชิ้น, ห้อง ,จาน, กระปุก, ถุง
  price: number;
  imgData: string;
}