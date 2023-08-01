"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { List, SignOut, UserCircle } from "phosphor-react";
import { useState } from "react";

import logo from "@/assets/logo/logo-default.svg";
// import { destroySession } from '@/services/auth';

import * as S from "./styles";

export const Header = () => {
  const [isAdminMenuOpen, setOpenAdminMenu] = useState(false);

  const router = useRouter();

  // const handleLogout = () => {
  //   destroySession();
  //   router.push('/login');
  // };

  const openMenu = () => {
    setOpenAdminMenu(!isAdminMenuOpen);
  };

  return (
    <S.StyledHeader>
      <S.LeftSideHeader>
        <Link href="/dashboard">
          <Image src={logo} alt="xziBank logo" width={200} height={40} />
        </Link>
      </S.LeftSideHeader>

      <S.RightSideHeader>
        <S.MenuList type="button" onClick={openMenu}>
          <List size={30} color={"#000"} weight="thin" />
        </S.MenuList>
      </S.RightSideHeader>

      {isAdminMenuOpen && (
        <S.MenuOptions onMouseLeave={openMenu}>
          <button
            className="navLink"
            type="button"
            onClick={() => console.log("hi")}
          >
            <UserCircle size={30} color={"#000"} weight="thin" />
            <p>Perfil</p>
          </button>
          <button
            className="navLink"
            type="button"
            onClick={() => console.log("hi")}
          >
            <SignOut size={30} color={"#000"} weight="thin" />
            <p>Sair</p>
          </button>
        </S.MenuOptions>
      )}
    </S.StyledHeader>
  );
};
