import { styled } from "styled-components";

export const StyledMainLoginPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledFormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (min-width: 768px) {
    min-width: 50%;
    max-width: 50%;
    min-height: 100vh;
  }
`;

export const StyledLogoBox = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 15px;

  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);

  border-radius: 6px;

  border: 1px solid ${({ theme }) => theme.COLORS.white300};

  @media (min-width: 768px) {
    min-width: 80%;
    max-width: 80%;
  }

  @media (min-width: 1024px) {
    min-width: 55%;
    max-width: 55%;
  }

  .textBox {
    display: flex;
    flex-direction: column;

    p {
      font-size: ${({ theme }) => theme.FONTS_SIZES.body};
      font-weight: ${({ theme }) => theme.FONTS_WEIGHTS.light};
    }

    h3 {
      font-size: ${({ theme }) => theme.FONTS_SIZES.medium};
      font-weight: ${({ theme }) => theme.FONTS_WEIGHTS.subtitle};
    }

    color: ${({ theme }) => theme.COLORS.white800};
  }

  .inputBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .buttonBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledImageLoginBox = styled.div`
  min-width: 50%;
  min-height: 100vh;

  background: ${({ theme }) => theme.COLORS.blue300};

  display: flex;
  justify-content: center;
  align-items: center;
`;
