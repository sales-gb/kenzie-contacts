import { GetServerSidePropsContext } from "next";
import { parseCookies, setCookie, destroyCookie } from "nookies";

export const getTokenCookie = (ctx: undefined | GetServerSidePropsContext) => {
  const cookies = parseCookies(ctx);
  return cookies["@kenzieContacts.token"];
};

export const setTokenCookie = (cookieName: string, tkt: string) => {
  setCookie(null, cookieName, tkt, {
    maxAge: 7 * 24 * 60 * 60,
    path: "/",
    sameSite: "none",
    secure: true,
  });
};

export const destroyToken = (ctx?: any) => {
  destroyCookie(ctx ?? {}, "@kenzieContacts.token", {
    path: "/",
  });
};
