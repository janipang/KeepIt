import { Contact } from "@/types/Contact";
import axios from "axios";
import { BACKEND_URL } from "@/constants/api";

export const getContacts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/contact`);
      if (response.status == 200) {
        return response.data
      }
    } catch (err) {
      console.log(err);
    }
    return null
  };

export const getContactById = async (contactId: string): Promise<Contact | null> => {
    try {
        const response = await axios.get(`${BACKEND_URL}/contact/${contactId}`);
        if (response.status == 200) {
            return response.data as Contact
        }
    } catch (err) {
        console.log(err);
    }
    return null
};

export const postContact = async (contact: Contact): Promise<Contact | null> => {
    try {
        const response = await axios.post(`${BACKEND_URL}/contact`, {
            contact
        });
        return response.data
    } catch (err) {
        console.log(err);
    }
    return null
};