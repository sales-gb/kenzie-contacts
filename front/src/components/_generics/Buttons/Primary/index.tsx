import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, MouseEvent, ReactElement } from "react";
import { BeatLoader } from "react-spinners";
import { useTheme } from "styled-components";

// import { withProfile } from '@/hoc/WithProfile';

import * as S from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  href?: string;
  icon?: ReactElement;
  isLoading?: boolean;
  disabled?: boolean;
  alt?: string;
}

const ButtonPrimaryBase: React.FC<IButtonProps> = ({
  title,
  href = "",
  icon,
  isLoading,
  hidden,
  disabled,
  alt,
  ...rest
}) => {
  const { push } = useRouter();
  const theme = useTheme();

  const handleClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    if (href) {
      push(href);
    }
    rest?.onClick?.(event);
  };

  return (
    <S.ButtonPrimary
      {...rest}
      onClick={handleClick}
      disabled={isLoading || disabled}
      hidden={hidden}
      title={alt}
    >
      {icon}
      {!isLoading && title}
      {isLoading && (
        <S.LoaderContainer>
          <BeatLoader size={6} color={theme.COLORS.white50} />
        </S.LoaderContainer>
      )}
    </S.ButtonPrimary>
  );
};

// const ButtonPrimary = withProfile<IButtonProps>(ButtonPrimaryBase);

export { ButtonPrimaryBase as ButtonPrimary };
