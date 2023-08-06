import { styled } from "styled-components";

export const StyleContactPage = styled.main`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 30px;
    padding-top: 0;
  }
`;

export const StyledLinkBox = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: flex-start;

  .styledLink {
    font-family: ${({ theme }) => theme.FONTS.primary};
    font-size: ${({ theme }) => theme.FONTS_SIZES.medium};
    font-weight: ${({ theme }) => theme.FONTS_WEIGHTS.medium};
    text-align: center;
    max-width: 100px;

    padding: 6px 16px;
    background: ${({ theme }) => theme.COLORS.blue50};
    color: ${({ theme }) => theme.COLORS.blue700};
    cursor: pointer;
    transition: 0.3s;
    border-radius: 6px;

    &:hover {
      background: ${({ theme }) => theme.COLORS.blue600};
      color: ${({ theme }) => theme.COLORS.white100};
    }

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.FONTS_SIZES.subtitle};
      max-width: 200px;
      padding: 8px 30px;
    }
  }
`;

export const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  border-radius: 6px;
  background: ${({ theme }) => theme.COLORS.white100};
  box-shadow: 0 2px 1px 0px rgba(0, 0, 0, 0.08);

  .headerDiv {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    min-width: 100%;
    min-height: 70px;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.blue200};
    border-radius: 6px 6px 0 0;

    h1 {
      font-family: ${({ theme }) => theme.FONTS.primary};
      font-size: ${({ theme }) => theme.FONTS_SIZES.medium};
      font-weight: ${({ theme }) => theme.FONTS_WEIGHTS.medium};
      color: ${({ theme }) => theme.COLORS.white100};
    }

    .buttonBox {
      display: flex;
      gap: 5px;

      .styledIcon {
        width: 20px;
        height: 20px;

        @media (min-width: 768px) {
          height: 30px;
          width: 30px;
        }
      }
    }

    @media (min-width: 768px) {
      padding: 30px 20px;

      h1 {
        font-size: ${({ theme }) => theme.FONTS_SIZES.subtitle};
      }
    }
  }
`;

export const SyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;

  .infoCard {
    display: flex;
    gap: 5px;

    p {
      font-size: ${({ theme }) => theme.FONTS_SIZES.body};
      font-weight: ${({ theme }) => theme.FONTS_WEIGHTS.regular};
      color: ${({ theme }) => theme.COLORS.white800};
    }

    .label {
      font-weight: ${({ theme }) => theme.FONTS_WEIGHTS.medium};
      color: ${({ theme }) => theme.COLORS.white900};
    }
  }
  @media (min-width: 758px) {
    padding: 20px;
    p {
      font-size: ${({ theme }) => theme.FONTS_SIZES.medium};
    }
  }
`;

export const StyledDeleteModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  margin: 0 auto;

  .headerModal {
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: ${({ theme }) => theme.FONTS_SIZES.subtitle};
      font-weight: ${({ theme }) => theme.FONTS_WEIGHTS.bold};
      color: ${({ theme }) => theme.COLORS.white800};
    }
  }

  .btnContainer {
    display: flex;
    gap: 8px;
  }
`;
