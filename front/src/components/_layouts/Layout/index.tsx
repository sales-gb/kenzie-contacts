import { Header } from "@/components";
import * as S from "./styles";

export const LayoutPrimary = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.Container>
      <S.Main>
        <Header />
        <S.Content>{children}</S.Content>
      </S.Main>
    </S.Container>
  );
};
