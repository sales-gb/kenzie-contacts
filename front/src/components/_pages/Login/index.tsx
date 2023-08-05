"use client";

import { createSession } from "@/services";
import { TLoginSchema, loginSchema } from "@/utils/validations";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonPrimary, ButtonSecondary, Input } from "@/components";

import * as S from "./styles";
import { useLayoutStore } from "@/store";
import logo from "@/assets/logo/logo-default.svg";
import loginImage from "@/assets/default-images/login-image.svg";
import Image from "next/image";

export const LoginForm = () => {
  const { isDesk, setDesk } = useLayoutStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const methods = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
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

  const handleLogin = async (data: TLoginSchema) => {
    try {
      setIsLoading(true);
      await createSession(data);
      setIsLoading(false);
      router.push("/contacts");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = () => {
    router.replace("/register");
  };

  return (
    <S.StyledMainLoginPage>
      {isDesk && (
        <S.StyledImageLoginBox>
          <Image src={loginImage} alt="" width={300} height={330} />
        </S.StyledImageLoginBox>
      )}

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
          <S.StyledLoginForm onSubmit={handleSubmit(handleLogin)}>
            <div className="textBox">
              <p>Bem vindo!</p>
              <h3>Faça Login na sua conta!</h3>
            </div>

            <div className="inputBox">
              <Input label="E-mail" register={register("email")} type="email" />

              <Input
                label="Senha"
                register={register("password")}
                type="password"
              />
            </div>

            <div className="buttonBox">
              <ButtonPrimary
                title="Logar"
                type="submit"
                isLoading={isLoading}
              />

              <p>Ainda não tem uma conta?</p>

              <ButtonSecondary
                title="Cadastre-se"
                type="button"
                isLoading={isLoading}
                onClick={handleRegister}
              />
            </div>
          </S.StyledLoginForm>
        </S.StyledFormBox>
      </FormProvider>
    </S.StyledMainLoginPage>
  );
};
