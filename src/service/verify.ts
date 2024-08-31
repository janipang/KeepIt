import Profile from "@/type/Profile";
import User from "@/type/User";
import axios from "axios";
import { BACKEND_URL } from "@/constant/api";

export const getUserByUsername = async (username: string): Promise<User | null> => {
  try {
    const response = await axios.get(`${BACKEND_URL}/user?username=${username}`);
    if (response.status == 200) {
      return response.data
    }
  } catch (err) {
    console.log(err);
  }
  return null
};

export const getUserById = async (userId: string): Promise<User | null> => {
  try {
    const response = await axios.get(`${BACKEND_URL}/user/${userId}`);
    if (response.status == 200) {
      return response.data as User
    }
  } catch (err) {
    console.log(err);
  }
  return null
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/user`);
    if (response.status == 200) {
      return response.data
    }
  } catch (err) {
    console.log(err);
  }
  return null
};

export const checkUserValid = async (username: string) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/user?username=${username}`);
    if (response.status == 200) {
      return true
    }
  } catch (err: any) {
    if (err.response && err.response.status == 404) {
      return false
    }
    console.log(err);
  }
  return null
};

//promise because return tupe of async function should be promise, so if it possible to be null too -> i should promise
export const postUser = async (username: string, password: string): Promise<User | null> => {
  try {
    const response = await axios.post(`${BACKEND_URL}/user`, {
      username,
      password
    });
    return response.data
  } catch (err) {
    console.log(err);
  }
  return null
};

export const putProfile = async (profileId: string, profile: Profile): Promise<Profile | null> => {
  console.log(profile);
  try {
    const response = await axios.put(`${BACKEND_URL}/profile/${profileId}`, {
      firstName: profile.firstName,
      lastName: profile.lastName,
      picture: profile.picture,
      phone: profile.phone,
      role: profile.role
    });
    return response.data
  } catch (err) {
    console.log(err);
  }
  return null
};