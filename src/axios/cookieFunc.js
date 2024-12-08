import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: '/' });

export const setCookie = (key, value, daysToExpire = 7) => {
    const expires = new Date();
    expires.setDate(expires.getDate() + daysToExpire);
    
    cookies.set(key, value, { path: '/', expires });
}

export const getCookie = (key) => { 
    

    return cookies.get(key);
}

export const removeCookie = (key) => {
    cookies.remove(key, { path: '/' });
}