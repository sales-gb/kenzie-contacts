"use client";

import { retriveContact } from "@/services";
import { useLayoutStore } from "@/store";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Pen, Trash } from "phosphor-react";
import { useEffect, useState } from "react";

import * as S from "./styles";
import { useModal } from "@/components/_generics/Modals/Default/useModal";
import { Contact, Container, ModalDefault } from "@/components";
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
  const { open, openModal, closeModal } = useModal();

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
              <button type="button" onClick={openModal}>
                <Pen className="styledIcon" color="#fff" />
              </button>

              <button>
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
        <EditContactForm
          contact={contact}
          data={contact}
          editedContact={editedContact}
          setEditedContact={setEditedContact}
          onClose={closeModal}
        />
      </ModalDefault>
    </>
  );
};
