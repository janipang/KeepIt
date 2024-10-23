export interface ProductInfo{
  id?: string;
  name: string;
  description: string;
  type: "product" | "service";
  unit: string; //กิโล, ชิ้น, ห้อง ,จาน, กระปุก, ถุง //change to unit type
  image: string;
  sell_price: number; //change to price
  buy_price: number; //remove
  amount?: number; //service should not have amount
}