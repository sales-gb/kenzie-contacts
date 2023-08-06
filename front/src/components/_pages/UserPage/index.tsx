"use client";

import { deleteUser, destroySession, retriveUser } from "@/services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Pen, Trash, Warning } from "phosphor-react";
import { useEffect, useState } from "react";

import * as S from "./styles";
import { useModal } from "@/components/_generics/Modals/Default/useModal";
import { ButtonPrimary, ButtonSecondary, ModalDefault } from "@/components";
import { formatDate } from "@/utils";
import { EditUserForm } from "./components";
import { toast } from "react-hot-toast";

export interface IUser {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

export const UserInfoPage = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [editedUser, setEditedUser] = useState<IUser | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const { open, openModal, closeModal } = useModal();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await retriveUser();
        setUser(userData);
        setIsLoading(false);
      } catch (error) {
        toast.error("Ops algo deu errado ao buscar os dados do usuário!");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setUser]);

  useEffect(() => {
    if (editedUser) {
      setUser(editedUser);
    }
  }, [editedUser]);

  const handleOpenEditModal = () => {
    openModal();
    setIsDelete(false);
    setIsEdit(true);
  };
  const handleOpenDeleteModal = () => {
    openModal();
    setIsEdit(false);
    setIsDelete(true);
  };

  const handleDeleteUser = async () => {
    try {
      await deleteUser();
      destroySession();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Contact not found.</div>;
  }

  return (
    <>
      <S.StyleContactPage>
        <S.StyledLinkBox>
          <Link className="styledLink" href={"/contacts"}>
            Voltar
          </Link>
        </S.StyledLinkBox>

        <S.StyledContactSection>
          <div className="headerDiv">
            <h1>Minhas informações</h1>

            <div className="buttonBox">
              <button type="button" onClick={handleOpenEditModal}>
                <Pen className="styledIcon" color="#fff" />
              </button>

              <button type="button" onClick={handleOpenDeleteModal}>
                <Trash className="styledIcon" color="#ff0000" />
              </button>
            </div>
          </div>

          <S.SyledContactInfo>
            <div className="infoCard">
              <p className="label">Nome:</p>
              <p>{user.fullName}</p>
            </div>

            <div className="infoCard">
              <p className="label">E-mail:</p>
              <p>{user.email}</p>
            </div>

            <div className="infoCard">
              <p className="label">Contato:</p>
              <p>{user.phoneNumber}</p>
            </div>

            <div className="infoCard">
              <p className="label">Registro:</p>
              <p>{formatDate(user.createdAt)}</p>
            </div>
          </S.SyledContactInfo>
        </S.StyledContactSection>
      </S.StyleContactPage>

      <ModalDefault
        open={open}
        isCloseOutSide={false}
        horizontalSize="md"
        onClose={closeModal}
      >
        {isEdit ? (
          <EditUserForm
            user={user}
            data={user}
            editedUser={editedUser}
            setEditedUser={setEditedUser}
            onClose={closeModal}
          />
        ) : null}

        {isDelete ? (
          <S.StyledDeleteModalContainer>
            <div className="headerModal">
              <h1>Tem certeza?</h1>

              <Warning size={80} color="#fbf600" />
            </div>

            <div className="btnContainer">
              <ButtonSecondary
                type="button"
                title="Cancelar"
                onClick={closeModal}
                isLoading={isLoading}
              />

              <ButtonPrimary
                type="button"
                title="Confirmar"
                onClick={handleDeleteUser}
                isLoading={isLoading}
              />
            </div>
          </S.StyledDeleteModalContainer>
        ) : null}
      </ModalDefault>
    </>
  );
};
