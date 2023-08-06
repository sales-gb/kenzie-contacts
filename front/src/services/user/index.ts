import { toast } from "react-hot-toast";
import { api } from "..";
import { parseCookies } from "nookies";

interface ICreateUser {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

const cookies = parseCookies();
const token = cookies["@kenzieContacts.token"];

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

export const retriveUser = async () => {
  try {
    const res = await api.get("/clients", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    toast.error("Ops algo deu errado, tente novamente");
    console.log(error);
  }
};

export const updateUser = async (data: any) => {
  try {
    const res = await api.patch("/clients", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("Dados atualizados com sucesso!");
    return res.data;
  } catch (error) {
    toast.error("Ops algo deu errado ao atualizar seus dados!");
    console.log(error);
  }
};

export const deleteUser = async () => {
  try {
    const res = await api.delete("/clients", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("Usuário deletado com sucesso!");
  } catch (error) {
    console.log(error);
    toast.error("Ops, algo deu errado ao te deletar");
  }
};
