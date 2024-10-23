import { ProductInfo } from '@/types/Product';
import axios from 'axios';
import { BACKEND_URL } from '@/constants/api';
import { FinancialChannel } from '@/types/FinancialChannel';

export const getFinancialChannel = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/financial-channel`);
    if (response.status == 200) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const getFinancialChannelById = async (
  channelId: string
): Promise<FinancialChannel | null> => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/financial-channel/${channelId}`
    );
    if (response.status == 200) {
      return response.data as FinancialChannel;
    }
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const postFinancialChannel = async (
  contact: FinancialChannel
): Promise<FinancialChannel | null> => {
  try {
    const response = await axios.post(`${BACKEND_URL}/financial-channel`, {
      contact,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const accountNameExist = async (
  account_type: 'cash' | 'bankaccount' | 'e-wallet',
  account_name: string
): Promise<boolean> => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/cash-account-name-exist`,
      {
        account_type,
        account_name,
      }
    );

    if (response.data.exist === true) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
  return false;
};
