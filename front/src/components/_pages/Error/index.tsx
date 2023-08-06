import Image from "next/image";

import Reading from "@/assets/default-images/404-image.svg";

import * as S from "./styles";

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: any;
  resetErrorBoundary: () => void;
}) => {
  return (
    <div>
      <S.ErrorContainer role="alert">
        <p>Ops... Algo deu errado.</p>
        <S.ErrorMessage>
          Hmm, algo não saiu como esperado... Vamos tentar de novo?
        </S.ErrorMessage>
        <Image src={Reading} alt="ink" />
      </S.ErrorContainer>
    </div>
  );
};
