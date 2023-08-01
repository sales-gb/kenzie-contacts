import styled from "styled-components";

export const ButtonPrimary = styled.button`
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.COLORS.white400};
  color: ${({ theme }) => theme.COLORS.blue800};

  font-family: ${({ theme }) => theme.FONTS.primary};
  font-size: ${({ theme }) => theme.FONTS_SIZES.body};
  font-weight: ${({ theme }) => theme.FONTS_WEIGHTS.medium};

  height: 50px;
  width: 100%;
  border-radius: 6px;
  border: none;

  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.COLORS.blue300};
    color: ${({ theme }) => theme.COLORS.blue900};
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.COLORS.blue500};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.blue200};
    cursor: not-allowed;
  }
`;

export const LoaderContainer = styled.div`
  max-width: 40px;
`;
