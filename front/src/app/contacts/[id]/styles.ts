import { styled } from "styled-components";

export const StyledMainContactSection = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    .animationDiv {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }

    & > * {
      max-width: 40%;
      align-items: center;
    }
  }
`;
