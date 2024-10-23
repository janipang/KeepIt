import { ProductInfo } from "@/types/Product";
import axios from "axios";
import { BACKEND_URL } from "@/constants/api";

export const getProducts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/product`);
      if (response.status == 200) {
        return response.data
      }
    } catch (err) {
      console.log(err);
    }
    return null
  };

export const getProductById = async (productId: string): Promise<ProductInfo | null> => {
    try {
        const response = await axios.get(`${BACKEND_URL}/product/${productId}`);
        if (response.status == 200) {
            return response.data as ProductInfo
        }
    } catch (err) {
        console.log(err);
    }
    return null
};

export const postProduct = async (contact: ProductInfo): Promise<ProductInfo | null> => {
    try {
        const response = await axios.post(`${BACKEND_URL}/product`, {
            contact
        });
        return response.data
    } catch (err) {
        console.log(err);
    }
    return null
};