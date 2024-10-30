import { Contact } from '@/types/Contact';
import axios from 'axios';
import { BACKEND_URL } from '@/constants/api';
import { getCookie } from './cookie';
import { BusinessType, ContactType, NameTitle } from '@/types/enum';

// ------------- integrated with backend --------------------

export const getContacts = async (): Promise<Contact[]> => {
  const businessName = getCookie('BussinessName');
  try {
    const response = await axios.get(
      `${BACKEND_URL}/business/${businessName}/contacts`,
      {
        headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data.content);
    return response.data.content as Contact[];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getContactById = async (
  contactId: string
): Promise<Contact | null> => {
  const businessName = getCookie('BussinessName');
  try {
    const response = await axios.get(
      `${BACKEND_URL}/business/${businessName}/contact/${contactId}`,
      {
        headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data);
    return response.data.content as Contact;
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const postContact = async (
  contact:{
    type: ContactType,
    title: NameTitle,
    businessType: BusinessType,
    contactBusinessName: string,
    firstName: string,
    lastName: string,
    phone: string,
    address: string,
    email: string,
    taxID: string,
    imgData: string,
  }
): Promise<Contact | null> => {
  const businessName = getCookie('BussinessName');
  try {
    const response = await axios.post(
      `${BACKEND_URL}/business/${businessName}/contact`,
      contact,
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
