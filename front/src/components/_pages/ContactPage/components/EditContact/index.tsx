"use client";

import { createSession, updateContact } from "@/services";
import {
  TLoginSchema,
  loginSchema,
  updateContactSchema,
} from "@/utils/validations";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonPrimary, ButtonSecondary, IContact, Input } from "@/components";

import * as S from "./styles";

type TEditContact = {
  fullName: string;
  email: string;
  phoneNumber: string;
};

type TEditProps = {
  data: TEditContact;
  contact: IContact;
  onClose: () => void;
  editedContact: IContact | null;
  setEditedContact: (contact: IContact | null) => void;
};

export const EditContactForm = ({
  data,
  onClose,
  editedContact,
  setEditedContact,
  contact,
}: TEditProps) => {
  const router = useRouter();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const methods = useForm({
    resolver: zodResolver(updateContactSchema),
    defaultValues: {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
    },
  });
  const { handleSubmit, register } = methods;

  const handleUpdate = async (data: TEditContact) => {
    try {
      const updatedContact: IContact = {
        ...data,
        id: contact.id,
        createdAt: contact.createdAt,
      };
      setIsLoading(true);
      await updateContact(Number(id), data);
      setIsLoading(false);
      setEditedContact({ ...updatedContact });
      onClose();
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setEditedContact(null);
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <S.StyledFormBox>
        <S.StyledLoginForm onSubmit={handleSubmit(handleUpdate)}>
          <div className="textBox">
            <h3>Edite aqui!</h3>
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
