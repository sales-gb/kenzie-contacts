"use client";

import { createUser } from "@/services";
import { TRegisterSchema, registerSchema } from "@/utils/validations";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonPrimary, ButtonSecondary, Input } from "@/components";

import * as S from "./styles";
import { useLayoutStore } from "@/store";
import logo from "@/assets/logo/logo-default.svg";
import registerImage from "@/assets/default-images/register-image.svg";
import Image from "next/image";

export const RegisterForm = () => {
  const { isDesk, setDesk } = useLayoutStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const methods = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  });
  const { handleSubmit, register } = methods;

  useEffect(() => {
    const handleResize = () => {
      setDesk(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setDesk]);

  const handRegister = async (data: TRegisterSchema) => {
    try {
      setIsLoading(true);
      await createUser(data);
      setIsLoading(false);
      router.push("/");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackLogin = () => {
    router.replace("/");
  };

  return (
    <S.StyledMainRegisterPage>
      <FormProvider {...methods}>
        <S.StyledFormBox>
          <S.StyledLogoBox>
            <Image
              src={logo}
              alt=""
              width={!isDesk ? 185 : 277}
              height={!isDesk ? 28 : 42}
            />
          </S.StyledLogoBox>
          <S.StyledRegisterForm onSubmit={handleSubmit(handRegister)}>
            <div className="textBox">
              <p>Seja bem vindo!</p>
              <h3>Faça seu cadastro!</h3>
            </div>

            <div className="inputBox">
              <Input label="Nome" register={register("fullName")} type="text" />

              <Input label="E-mail" register={register("email")} type="email" />

              <Input
                label="Contato"
                register={register("phoneNumber")}
                type="text"
              />

              <Input
                label="Senha"
                register={register("password")}
                type="password"
              />
            </div>

            <div className="buttonBox">
              <ButtonPrimary
                title="Confirmar"
                type="submit"
                isLoading={isLoading}
              />

              <ButtonSecondary
                title="Voltar para o login"
                type="button"
                isLoading={isLoading}
                onClick={handleBackLogin}
              />
            </div>
          </S.StyledRegisterForm>
        </S.StyledFormBox>
      </FormProvider>

      {isDesk && (
        <S.StyledImageRegisterBox>
          <Image src={registerImage} alt="" width={300} height={330} />
        </S.StyledImageRegisterBox>
      )}
    </S.StyledMainRegisterPage>
  );
};
