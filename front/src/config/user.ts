import { parseCookies, setCookie, destroyCookie } from "nookies";

export const getUserCookie = (ctx?: any): any | null => {
  const cookies = parseCookies(ctx);
  try {
    return JSON.parse(cookies["@kenzieContacts.user"]);
  } catch (error) {
    return null;
  }
};

export const setUserCookie = (cookieName: string, data?: any) => {
  if (!data) return;
  setCookie(null, cookieName, JSON.stringify(data), {
    path: "/",
    sameSite: "none",
    secure: true,
  });
};

export const destroyUser = (ctx?: any) => {
  destroyCookie(ctx ?? {}, "@kenzieContacts.user", {
    path: "/",
  });
};
