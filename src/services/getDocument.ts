import { Contact } from '@/types/Contact';
import axios from 'axios';
import { BACKEND_URL } from '@/constants/api';
import { getCookie } from './cookie';
import { BusinessType, ContactType, NameTitle } from '@/types/enum';

// ------------- integrated with backend --------------------
export const getQuotationById = async (documentCode: string) => {
  const businessName = getCookie('BussinessName');
  try {
    const response = await axios.get(
      `${BACKEND_URL}/business/${businessName}/document/${documentCode}`,
      {
        headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data.content);
    return response.data.content;
  } catch (err) {
    console.log(err);
    return [];
  }
};
