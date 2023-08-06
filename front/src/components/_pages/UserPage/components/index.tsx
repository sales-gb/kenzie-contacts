"use client";

import { updateContact, updateUser } from "@/services";
import {
  TUpdateUserSchema,
  updateContactSchema,
  updateUserSchema,
} from "@/utils/validations";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonPrimary, ButtonSecondary, IContact, Input } from "@/components";

import * as S from "./styles";

type TEditUser = {
  fullName: string;
  email: string;
  phoneNumber: string;
};

export interface IUser {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

type TEditProps = {
  data: TEditUser;
  user: IUser;
  onClose: () => void;
  editedUser: IUser | null;
  setEditedUser: (user: IUser | null) => void;
};

export const EditUserForm = ({
  data,
  onClose,
  setEditedUser,
  user,
}: TEditProps) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const methods = useForm({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
    },
  });
  const { handleSubmit, register } = methods;

  const handleUpdate = async (data: TEditUser) => {
    try {
      const updatedUser: IUser = {
        ...data,
        id: user.id,
        createdAt: user.createdAt,
      };
      setIsLoading(true);
      await updateUser(data);
      setIsLoading(false);
      setEditedUser({ ...updatedUser });
      onClose();
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setEditedUser(null);
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
