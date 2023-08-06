import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.white50};

  padding-top: 70px;
`;
