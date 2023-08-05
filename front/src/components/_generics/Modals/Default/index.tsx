/* eslint-disable react/display-name */
import { X } from "phosphor-react";
import {
  ReactNode,
  MouseEvent,
  useState,
  forwardRef,
  useImperativeHandle,
  ForwardedRef,
} from "react";
import { createPortal } from "react-dom";
import { useTheme } from "styled-components";

import * as S from "./styles";

type ModalRef = {
  openModal: () => void;
  closeModal: () => void;
};

export type IModalProps = {
  horizontalSize?: "md" | "lg" | "xl";
  children: ReactNode;
  open: ForwardedRef<ModalRef>;
  onClose?: () => void;
  isCloseOutSide?: boolean;
  isIconClose?: boolean;
};

const ModalDefault = forwardRef<ModalRef, IModalProps>(
  (
    {
      horizontalSize,
      children,
      open,
      onClose,
      isCloseOutSide = true,
      isIconClose = true,
    },
    _
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        setIsOpen(false);
        onClose?.();
      }
    };

    const handleClose = () => {
      setIsOpen(false);
      onClose?.();
    };

    useImperativeHandle(
      open,
      () => ({
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }),
      []
    );

    return (
      <>
        {isOpen &&
          createPortal(
            <S.ModalContainer
              onClick={
                isCloseOutSide ? (e: any) => handleClickOutside(e) : () => {}
              }
            >
              <S.Content
                horizontalSize={horizontalSize}
                className={isOpen ? "open" : "close"}
              >
                <S.Header>
                  {!!isIconClose && (
                    <button onClick={handleClose} type="button">
                      <X width={24} height={24} color="#000" />
                    </button>
                  )}
                </S.Header>

                <S.Body>{children}</S.Body>
              </S.Content>
            </S.ModalContainer>,
            document.body
          )}
      </>
    );
  }
);

export { ModalDefault };
