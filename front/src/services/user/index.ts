import { toast } from "react-hot-toast";
import { api } from "..";

interface ICreateUser {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export const createUser = async (data: ICreateUser) => {
  try {
    const res = await api.post("/clients", data);
    toast.success("Parabéns! Conta criada com sucesso!");
    return res.data;
  } catch (err) {
    toast.error("Ops algo deu errado, tente novamente!");
    console.log(err);
  }
};
