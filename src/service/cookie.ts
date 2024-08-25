import Cookie from 'js-cookie';

export const setCookie = (key:string, value:string) => {
    Cookie.set(key, value, {
        secure:true
    });
}

export const getCookie = (key:string) => {
    const data = Cookie.get(key);
    return data
}

export const removeCookie = (key:string) => {
    Cookie.remove(key);
}