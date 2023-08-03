import * as S from "./styles";

type IProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: IProps) => {
  return <S.Container>{children}</S.Container>;
};
