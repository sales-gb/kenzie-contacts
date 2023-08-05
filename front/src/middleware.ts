import { NextResponse, type NextRequest } from "next/server";

import { ROUTES } from "./constants";

export function middleware(req: NextRequest) {
  const verify = req.cookies.get("@kenzieContacts.token");
  const url = req.nextUrl;
  const urlClone = url.clone();

  if (!verify && ROUTES.private.includes(url.pathname)) {
    console.log("route -> private", url.pathname);

    urlClone.pathname = "/";

    return NextResponse.redirect(urlClone);
  }

  if (verify && ROUTES.public.includes(url.pathname)) {
    console.log("route -> public");

    urlClone.pathname = "/contacts";

    return NextResponse.redirect(urlClone);
  }

  console.log("MIDDLEWARE IS READY!");
}
