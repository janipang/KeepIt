import Cookies from 'js-cookie';

type CookieKey = "accessToken" | "userId" | "BussinessName" | "BussinessBranch" | "new_email" | "new_username" | "new_password";

export const setCookie = (key:CookieKey , value:string) => {
    Cookies.set(key, value, { expires: 2 });
}

export const getCookie = (key:CookieKey) => {
    const data = Cookies.get(key);
    return data
}

export const removeCookie = (key:CookieKey) => {
    Cookies.remove(key);
}