import { ProductInfo } from '@/types/Product';
import axios from 'axios';
import { BACKEND_URL } from '@/constants/api';
import { getCookie } from './cookie';

export const getProducts = async (): Promise<ProductInfo[]> => {
  const businessName = getCookie('BussinessName');
  try {
    const response = await axios.get(
      `${BACKEND_URL}/business/${businessName}/items`,
      {
        headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data.content);
    return response.data.content as ProductInfo[];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getProductById = async (
  productId: string
): Promise<ProductInfo | null> => {
  const businessName = getCookie('BussinessName');
  try {
    const response = await axios.get(
      `${BACKEND_URL}/business/${businessName}/item/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data);
    return response.data.content as ProductInfo;
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const postProduct = async (
  product: ProductInfo
): Promise<ProductInfo | null> => {
  const businessName = getCookie('BussinessName');
  try {
    const response = await axios.post(
      `${BACKEND_URL}/business/${businessName}/item`,
      product,
      {
        headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data);
    return response.data.content;
  } catch (err) {
    console.log(err);
  }
  return null;
};
