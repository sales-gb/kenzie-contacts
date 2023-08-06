"use client";

import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  width: 100vw;
  height: 80px;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;

  @media (min-width: 768px) {
    padding: 0 60px;
  }

  background: ${({ theme }) => theme.COLORS.white100};

  border-bottom: 0.7px solid ${({ theme }) => theme.COLORS.white200};

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);

  position: fixed;
  z-index: 1000;
`;

export const LeftSideHeader = styled.div`
  width: 50%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RightSideHeader = styled.nav`
  width: 50%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyedLinkBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const MenuOptions = styled.div`
  position: fixed;
  top: 70px;
  right: 45px;

  width: 260px;
  height: 200px;
  padding: 15px;

  background-color: ${({ theme }) => theme.COLORS.white100};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.white200};

  transition: 0.3s;

  .navLink {
    width: 100%;
    display: flex;
    align-items: center;
    height: 55px;

    border-radius: 10px;
    padding: 0 10px;
    gap: 20px;

    &:hover {
      background: ${({ theme }) => theme.COLORS.white400};
      transition: 0.3s;
    }

    p {
      font-family: ${({ theme }) => theme.FONTS.primary};
      font-size: ${({ theme }) => theme.FONTS_SIZES.medium};
      font-weight: ${({ theme }) => theme.FONTS_WEIGHTS.light};

      color: ${({ theme }) => theme.COLORS.white800};
    }
  }

  animation: ${FadeIn} 0.3s ease-in-out;
`;

export const MenuList = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    transition: 0.3s;
    background-color: ${({ theme }) => theme.COLORS.white300};

    border-radius: 50%;
  }
`;

export const MenuUser = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.COLORS.white200};
`;
