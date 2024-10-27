import Profile from '@/types/Profile';
import User from '@/types/User';
import axios from 'axios';
import { BACKEND_URL } from '@/constants/api';

export const getUserByUsername = async (
  username: string
): Promise<User | null> => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/user?username=${username}`
    );
    if (response.status == 200) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const getUserById = async (userId: string): Promise<User | null> => {
  try {
    const response = await axios.get(`${BACKEND_URL}/user/${userId}`);
    if (response.status == 200) {
      return response.data as User;
    }
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/user`);
    if (response.status == 200) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const checkUserValid = async (email: string, username: string) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/user/registration-validation`,
      {
        email: email,
        user: username,
      }
    );
    if (response.status == 200) {
      return true;
    }
  } catch (err: any) {
    if (
      err.response &&
      (err.response.status == 400 || err.response.status == 409)
    ) {
      alert(err.response.data.message);
      return false;
    }
    console.log(err);
  }
  return null;
};

//promise because return tupe of async function should be promise, so if it possible to be null too -> i should promise
export const postUser = async (
  username: string,
  password: string
): Promise<User | null> => {
  try {
    const response = await axios.post(`${BACKEND_URL}/user`, {
      username,
      password,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const putProfile = async (
  profileId: string,
  profile: Profile
): Promise<Profile | null> => {
  console.log(profile);
  try {
    const response = await axios.put(`${BACKEND_URL}/profile/${profileId}`, {
      firstName: profile.firstName,
      lastName: profile.lastName,
      picture: profile.picture,
      phone: profile.phone,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
  return null;
};


// ---------------------------- integrated with backend ---------------------------

export const postLogin = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/user/login`, {
      user: username,
      pwd: password,
    });
    return response.data.content; //return access token
  } catch (err: any) {
    if (err.response && err.response.status == 400) {
      alert(err.response.data.message);
      return false;
    }
  }
};

export const postRegister = async (
  email: string,
  username: string,
  password: string,
  profile: Profile
) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/user/registration`, {
      email: email,
      user: username,
      pwd: password,
      title: profile.title,
      firstName: profile.firstName,
      lastName: profile.lastName,
      phone: profile.phone,
      imgData: '',
    });
    console.log(response);
    return response.data.content; //return access token
  } catch (err: any) {
    if (err.response && (err.response.status == 400 || err.response.status == 409)) {
      alert(err.response.data.message);
      return false;
    }
  }
};
