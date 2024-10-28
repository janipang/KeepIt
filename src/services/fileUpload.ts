import { BACKEND_URL } from '@/constants/api';
import axios from 'axios';
import { getCookie } from './cookie';

export const getFileURL = async (file: File) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/upload-file`,{
      headers:{
        // budinessId: getCookie('budinessId'),
        accessToken: getCookie('accessToken'),
      },
      file
    });
    return response.data.content; //receive url
  } catch (err) {
    console.log(err);
    return "";
  }
};
