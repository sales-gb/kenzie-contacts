import { FieldError, UseFormRegisterReturn } from "react-hook-form";

import * as S from "./styles";
interface IInputProps {
  label: string;
  register: UseFormRegisterReturn<string>;
  type: "text" | "email" | "password";
  error?: FieldError;
}

export const Input = ({ label, register, type, error }: IInputProps) => (
  <S.StyledFieldset>
    <S.StyledTextField label={label} type={type} {...register} />
    {error ? <p>{error.message}</p> : null}
  </S.StyledFieldset>
);
