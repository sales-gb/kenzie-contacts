import styled, { keyframes } from "styled-components";

enum ModalHorizontalSize {
  "md" = "480px",
  "lg" = "600px",
  "xl" = "750px",
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.div`
  animation: ${fadeIn} 0.3s linear;

  display: flex;

  width: 100%;
  height: 100vh;
  max-height: 1020px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

export const Content = styled.div<{ horizontalSize?: "md" | "lg" | "xl" }>`
  display: flex;
  flex-direction: column;
  max-width: ${({ horizontalSize }) =>
    ModalHorizontalSize[horizontalSize || "md"]};
  max-height: calc(100% - 2rem);
  width: 100%;
  padding-bottom: 2.5rem;
  background-color: ${({ theme }) => theme.COLORS.white200};
  border-radius: 8px;
  overflow-y: auto;

  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.blue200};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.blue200};
  }

  @media (min-width: 768) {
    overflow-y: scroll;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-inline: 1rem;
  padding-top: 1rem;

  img {
    cursor: pointer;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 10px;

  @media (min-width: 768px) {
    padding-inline: 1rem;
  }
`;
