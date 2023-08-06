import { ButtonPrimary, ModalDefault, SearchInput } from "@/components";
import { getContacts } from "@/services";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import * as S from "./styles";
import { PlusCircle } from "phosphor-react";
import { formatDate } from "@/utils";
import { useModal } from "@/components/_generics/Modals/Default/useModal";
import { NewContactForm } from "./components/NewContact";

export interface Contact {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

export const DashboardPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [newContact, setNewContact] = useState<Contact | null>(null);
  const { open, closeModal, openModal } = useModal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactsData = await getContacts();
        setContacts(contactsData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setContacts]);

  useEffect(() => {
    if (newContact) {
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  }, [newContact]);

  const handleAddContact = (newContact: Contact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phoneNumber.includes(searchTerm)
  );

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <S.StyledMainDashboard>
        <S.StyledHeaderDash>
          <h2>Contatos</h2>

          <div className="buttonContainer">
            <ButtonPrimary title="+ Adicionar" onClick={openModal} />
          </div>
        </S.StyledHeaderDash>

        <S.StyledSearchBox>
          <SearchInput
            label="Pesquisar"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </S.StyledSearchBox>

        <S.StyledTitleBox>
          <div></div>
          <h4>Nome</h4>
          <h4>E-mail</h4>
          <h4>Contato</h4>
          <h4>Registro</h4>
        </S.StyledTitleBox>

        <S.StyledContactsList>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Link href={`/contacts/${contact.id}`}>
                <PlusCircle className="linkToContact" />
              </Link>
              <p>{contact.fullName}</p>
              <p>{contact.email}</p>
              <p>{contact.phoneNumber}</p>
              <p>{formatDate(contact.createdAt)}</p>
            </li>
          ))}
        </S.StyledContactsList>
      </S.StyledMainDashboard>

      <ModalDefault
        open={open}
        isCloseOutSide={false}
        horizontalSize="md"
        onClose={closeModal}
      >
        <NewContactForm onClose={closeModal} onAddContact={handleAddContact} />
      </ModalDefault>
    </>
  );
};
