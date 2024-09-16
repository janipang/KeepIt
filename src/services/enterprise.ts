import Profile from "@/types/Profile";
import User from "@/types/User";
import Enterprise from "@/types/Enterprise";
import axios from "axios";
import { BACKEND_URL } from "@/constants/api";

export const getEnterprises = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/enterprise`);
      if (response.status == 200) {
        return response.data
      }
    } catch (err) {
      console.log(err);
    }
    return null
  };

export const getEnterpriseById = async (enterpriseId: string): Promise<Enterprise | null> => {
    try {
        const response = await axios.get(`${BACKEND_URL}/enterprise/${enterpriseId}`);
        if (response.status == 200) {
            return response.data as Enterprise
        }
    } catch (err) {
        console.log(err);
    }
    return null
};

export const postEnterprise = async (enterprise: Enterprise): Promise<Enterprise | null> => {
    try {
        const response = await axios.post(`${BACKEND_URL}/enterprise`, {
            enterprise
        });
        return response.data
    } catch (err) {
        console.log(err);
    }
    return null
};