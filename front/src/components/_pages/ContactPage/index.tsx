"use client";

import { retriveContact } from "@/services";
import { useLayoutStore } from "@/store";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Pen, Trash } from "phosphor-react";
import { useEffect, useState } from "react";

import * as S from "./styles";

interface Contact {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

export const ContactPage = () => {
  const { id } = useParams();
  const [contact, setContact] = useState<Contact | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!contact) {
    return <div>Contact not found.</div>;
  }

  return (
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
            <button type="button">
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
  );
};
