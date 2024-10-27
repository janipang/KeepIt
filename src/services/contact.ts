import { Contact } from '@/types/Contact';
import axios from 'axios';
import { BACKEND_URL } from '@/constants/api';
import { getCookie } from './cookie';

export const getContacts = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/contact`, {
      headers: {
        // businessId: getCookie('businessId'),
        accessToken: getCookie('accessToken'),
      },
    });
    if (response.status == 200) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const getContactById = async (
  contactId: string
): Promise<Contact | null> => {
  try {
    const response = await axios.get(`${BACKEND_URL}/contact/${contactId}`, {
      headers: {
        // businessId: getCookie('businessId'),
        accessToken: getCookie('accessToken'),
      },
    });
    if (response.status == 200) {
      return response.data as Contact;
    }
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const postContact = async (
  contact: Contact
): Promise<Contact | null> => {
  try {
    const response = await axios.post(`${BACKEND_URL}/contact`, {
        headers: {
          // businessId: getCookie('businessId'),
          accessToken: getCookie('accessToken'),
        },
      contact,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
  return null;
};
