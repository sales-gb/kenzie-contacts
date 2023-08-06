"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { List, SignOut, UserCircle } from "phosphor-react";
import { useEffect, useState } from "react";

import logo from "@/assets/logo/logo-default.svg";

import * as S from "./styles";
import { destroySession } from "@/services";
import { useLayoutStore } from "@/store";

export const Header = () => {
  const { isDesk, setDesk } = useLayoutStore();
  const [isAdminMenuOpen, setOpenAdminMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setDesk(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setDesk]);

  const handleLogout = () => {
    destroySession();
    router.push("/");
  };

  const openMenu = () => {
    setOpenAdminMenu(!isAdminMenuOpen);
  };

  return (
    <S.StyledHeader>
      <S.LeftSideHeader>
        <Link href="/contacts">
          <Image
            src={logo}
            alt="xziBank logo"
            width={!isDesk ? 150 : 277}
            height={!isDesk ? 30 : 43}
          />
        </Link>
      </S.LeftSideHeader>

      <S.RightSideHeader>
        <S.MenuList type="button" onClick={openMenu}>
          <List size={30} color={"#000"} weight="thin" />
        </S.MenuList>
      </S.RightSideHeader>

      {isAdminMenuOpen && (
        <S.MenuOptions onMouseLeave={openMenu}>
          <Link className="navLink" href={"/user"}>
            <UserCircle size={30} color={"#000"} weight="thin" />
            <p>Perfil</p>
          </Link>
          <button className="navLink" type="button" onClick={handleLogout}>
            <SignOut size={30} color={"#000"} weight="thin" />
            <p>Sair</p>
          </button>
        </S.MenuOptions>
      )}
    </S.StyledHeader>
  );
};
