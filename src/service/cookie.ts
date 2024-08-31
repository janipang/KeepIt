import Cookies from 'js-cookie';

export const setCookie = (key:string, value:string) => {
    Cookies.set(key, value, { expires: 2 });
}

export const getCookie = (key:string) => {
    const data = Cookies.get(key);
    return data
}

export const removeCookie = (key:string) => {
    Cookies.remove(key);
}