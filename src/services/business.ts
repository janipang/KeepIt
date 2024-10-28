import Profile from '@/types/Profile';
import User from '@/types/User';
import Enterprise from '@/types/Enterprise';
import axios from 'axios';
import { BACKEND_URL } from '@/constants/api';
import { getCookie } from './cookie';

export const getBusinessById = async (
  enterpriseId: string
): Promise<Enterprise | null> => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/enterprise/${enterpriseId}`
    );
    if (response.status == 200) {
      return response.data as Enterprise;
    }
  } catch (err) {
    console.log(err);
  }
  return null;
};

// ----------------- integrated with backend ----------------

export const getBusinesses = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/businesses`, {
      headers: {
        Authorization: `Bearer ${getCookie('accessToken')}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.status == 200) {
      console.log(response.data.content);
      return response.data.content;
    }
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const postBusiness = async (
  business: Enterprise
): Promise<{ name: string; branch: string } | null> => {
  try {
    const response = await axios.post(`${BACKEND_URL}/business`, business, {
      headers: {
        Authorization: `Bearer ${getCookie('accessToken')}`,
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    return response.data.content;
  } catch (err: any) {
    alert(err.response.data.message);
    console.log(err);
  }
  return null;
};

export const deleteBusiness = async (
  name: string, // business name encoded
  branch: string,
): Promise<boolean> => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/business/${name}`, {
      headers: {
        Authorization: `Bearer ${getCookie('accessToken')}`,
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    return true;

  } catch (err: any) {
    alert(err.response.data.message);
    console.log(err);
    return false;
  }
};

export const postJoinBusiness = async (
  joinCode: string
): Promise<{ name: string; branch: string } | null> => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/business/join`,
      {
        joinCode: joinCode,
      },
      {
        headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response);
    return response.data.content;
  } catch (err: any) {
    console.log(err);
    alert(err.response.data.message);
    return null;
  }
};

export const deleteLeaveBusiness = async (
  name: string, // business name encoded
  branch: string,
): Promise<boolean> => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/business/${name}/leave`, {
      headers: {
        Authorization: `Bearer ${getCookie('accessToken')}`,
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    return true;

  } catch (err: any) {
    alert(err.response.data.message);
    console.log(err);
    return false;
  }
};
