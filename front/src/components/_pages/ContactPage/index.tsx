"use client";

import { deleteContact, retriveContact } from "@/services";
import { useLayoutStore } from "@/store";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Pen, Trash, Warning } from "phosphor-react";
import { useEffect, useState } from "react";

import * as S from "./styles";
import { useModal } from "@/components/_generics/Modals/Default/useModal";
import {
  ButtonPrimary,
  ButtonSecondary,
  Contact,
  Container,
  ModalDefault,
} from "@/components";
import { EditContactForm } from "./components/EditContact";

export interface IContact {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

export const ContactPage = () => {
  const { id } = useParams();
  const [contact, setContact] = useState<IContact | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [editedContact, setEditedContact] = useState<IContact | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const { open, openModal, closeModal } = useModal();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactId = Number(id);
        const data = await retriveContact(contactId);

        setContact(data);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching contact:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setContact, id]);

  useEffect(() => {
    if (editedContact) {
      setContact(editedContact);
    }
  }, [editedContact]);

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
  const handleDeleteContact = async () => {
    try {
      const contactId = Number(id);
      await deleteContact(contactId);
      router.push("/contacts");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!contact) {
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
            <h1>Informações do contato</h1>

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
              <p>{contact.fullName}</p>
            </div>

            <div className="infoCard">
              <p className="label">E-mail:</p>
              <p>{contact.email}</p>
            </div>

            <div className="infoCard">
              <p className="label">Contato:</p>
              <p>{contact.phoneNumber}</p>
            </div>

            <div className="infoCard">
              <p className="label">Registro:</p>
              <p>{contact.createdAt}</p>
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
          <EditContactForm
            contact={contact}
            data={contact}
            editedContact={editedContact}
            setEditedContact={setEditedContact}
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
              <ButtonPrimary
                type="button"
                title="Confirmar"
                onClick={handleDeleteContact}
                isLoading={isLoading}
              />

              <ButtonSecondary
                type="button"
                title="Cancelar"
                onClick={closeModal}
                isLoading={isLoading}
              />
            </div>
          </S.StyledDeleteModalContainer>
        ) : null}
      </ModalDefault>
    </>
  );
};
