"use client";

import { createContact } from "@/services";
import { contactSchema } from "@/utils/validations";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonPrimary, ButtonSecondary, Contact, Input } from "@/components";

import * as S from "./styles";

type TNewContact = {
  fullName: string;
  email: string;
  phoneNumber: string;
};

type TContactProps = {
  onClose: () => void;
  onAddContact: (newContact: Contact) => void;
};

export const NewContactForm = ({ onClose, onAddContact }: TContactProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const methods = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
    },
  });
  const { handleSubmit, register } = methods;

  const handleUpdate = async (data: TNewContact) => {
    try {
      setIsLoading(true);
      const newContact = await createContact(data);
      setIsLoading(false);
      onAddContact(newContact);
      onClose();
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <S.StyledFormBox>
        <S.StyledLoginForm onSubmit={handleSubmit(handleUpdate)}>
          <div className="textBox">
            <p>Adicione novos contatos a sua agenda</p>
          </div>

          <div className="inputBox">
            <Input label="Nome" register={register("fullName")} type="text" />
            <Input label="E-mail" register={register("email")} type="email" />

            <Input
              label="Contato"
              register={register("phoneNumber")}
              type="text"
            />
          </div>

          <div className="buttonBox">
            <ButtonPrimary
              title="Confirmar"
              type="submit"
              isLoading={isLoading}
            />

            <p>Mudou de ideia?</p>

            <ButtonSecondary
              title="Cancelar"
              type="button"
              isLoading={isLoading}
              onClick={handleCancel}
            />
          </div>
        </S.StyledLoginForm>
      </S.StyledFormBox>
    </FormProvider>
  );
};
