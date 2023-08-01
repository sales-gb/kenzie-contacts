import toast from "react-hot-toast";

import {
  destroyToken,
  destroyUser,
  setTokenCookie,
  setUserCookie,
} from "@/config";
import { api } from "../api";

interface IUserSession {
  email: string;
  password: string;
}

export const createSession = async (data: IUserSession) => {
  try {
    const res = await api.post("/login", data);

    const { token } = res.data;

    setTokenCookie("@kenzieContacts.token", token);
    setUserCookie("@kenzieContacts.user", res.data);

    return res.data;
  } catch (error) {
    toast.error("E-mail ou senha inválido");
    console.log(error);
    throw new Error();
  }
};

export const destroySession = () => {
  try {
    destroyToken();
    destroyUser();
  } catch (err) {
    toast.error("Algo deu errado, tente novamente!");
    console.log(err);
  }
};
