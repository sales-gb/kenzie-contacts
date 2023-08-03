import * as S from "./styles";
import { MagnifyingGlass } from "phosphor-react";
interface IInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ label, value, onChange }: IInputProps) => (
  <S.StyledFieldset>
    <S.StyledTextField
      label={label}
      value={value}
      type="text"
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        startAdornment: (
          <S.StyledInputAdornment position="start">
            <MagnifyingGlass size={20} color="#000" />
          </S.StyledInputAdornment>
        ),
      }}
    />
  </S.StyledFieldset>
);
