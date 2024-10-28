import Cookies from 'js-cookie';

type CookieKey = "accessToken" | "username" | "BussinessName" | "BussinessBranch" | "new_email" | "new_username" | "new_password";

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

export const removeAllCookies = () => {
  removeCookie("accessToken");
  removeCookie("BussinessName");
  removeCookie("BussinessBranch");
  removeCookie("new_email");
  removeCookie("new_username");
  removeCookie("new_password");
  removeCookie("username")
}