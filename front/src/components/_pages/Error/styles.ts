import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 1rem;

  gap: 1rem;

  margin-top: 20rem;

  & > p:first-child {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.black};
    font-weight: 600;
    text-align: center;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.red};
  font-weight: 400;
  text-align: center;
`;
