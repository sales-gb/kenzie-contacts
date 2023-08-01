import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledFieldset = styled.fieldset`
  border: none;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  input {
    font-family: ${({ theme }) => theme.FONTS.primary};
  }

  label {
    &.Mui-focused {
      color: ${({ theme }) => theme.COLORS.blue400};
    }
  }

  .Mui-focused {
    fieldset {
      border-color: ${({ theme }) => theme.COLORS.blue400}!important;
      outline-color: ${({ theme }) => theme.COLORS.blue400}!important;
    }
  }
`;
