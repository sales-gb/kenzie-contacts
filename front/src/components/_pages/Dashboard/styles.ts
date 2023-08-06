import { styled } from "styled-components";

export const StyledMainDashboard = styled.main`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  @media (min-width: 500px) {
    gap: 20px;
  }
`;

export const StyledHeaderDash = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 10px;

  h2 {
    font-size: ${({ theme }) => theme.FONTS_SIZES.subtitle};
    font-weight: ${({ theme }) => theme.FONTS_WEIGHTS.medium};
    color: ${({ theme }) => theme.COLORS.white900};
  }

  @media (min-width: 500px) {
    margin-top: 0;
    padding-bottom: 20px;
    font-size: ${({ theme }) => theme.FONTS_SIZES.title};
  }

  .buttonContainer {
    width: 150px;
  }
`;

export const StyledSearchBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px 12px;
  border-radius: 6px;
  max-height: 70px;

  background: ${({ theme }) => theme.COLORS.white100};

  box-shadow: 0 2px 1px 0px rgba(0, 0, 0, 0.08);

  @media (min-width: 500px) {
    grid-template-columns: 300px 1fr;
  }
`;

export const StyledTitleBox = styled.div`
  display: grid;
  grid-template-columns: 40px repeat(2, 1fr);
  align-items: center;
  padding: 0 10px;

  h4 {
    font-size: ${({ theme }) => theme.FONTS_SIZES.body};
    font-weight: ${({ theme }) => theme.FONTS_WEIGHTS.regular};
    color: ${({ theme }) => theme.COLORS.blue800};
  }

  h4:nth-child(4),
  h4:nth-child(5) {
    display: none;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 80px repeat(4, 1fr);

    font-size: ${({ theme }) => theme.FONTS_SIZES.subtitle};

    h4:nth-child(4),
    h4:nth-child(5) {
      display: block;
    }
  }
`;

export const StyledContactsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100%;
  gap: 8px;
  @media (min-width: 500px) {
    gap: 15px;
  }

  li {
    display: grid;
    grid-template-columns: 40px repeat(2, 1fr);
    padding: 12px 10px;

    background: ${({ theme }) => theme.COLORS.white100};
    box-shadow: 0 2px 1px 0px rgba(0, 0, 0, 0.08);
    border-radius: 6px;

    .linkToContact {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.blue600};
      cursor: pointer;
    }

    p {
      font-size: ${({ theme }) => theme.FONTS_SIZES.mobile};
      font-weight: ${({ theme }) => theme.FONTS_WEIGHTS.regular};
      color: ${({ theme }) => theme.COLORS.white900};
    }

    p:nth-child(4),
    p:nth-child(5) {
      display: none;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 70px repeat(4, 1fr);
      padding: 23px 20px;

      p {
        font-size: ${({ theme }) => theme.FONTS_SIZES.medium};
      }

      .linkToContact {
        width: 30px;
        height: 30px;
      }

      p:nth-child(4),
      p:nth-child(5) {
        display: block;
      }
    }
  }
`;
