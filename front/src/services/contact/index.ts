import { parseCookies } from "nookies";
import { api } from "..";
import { toast } from "react-hot-toast";

const cookies = parseCookies();
const token = cookies["@kenzieContacts.token"];

export const getContacts = async () => {
  try {
    const res = await api.get("/contacts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = res.data;
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error("Erro ao obter dados dos contatos:", error);
  }
};

export const retriveContact = async (id: number) => {
  try {
    const res = await api.get(`/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateContact = async (id: number, data: any) => {
  try {
    const res = await api.patch(`/contacts/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("Contato atualizado com sucesso!!");
    return res.data;
  } catch (error) {
    toast.error("Ops! Parece que algo deu errado!");
    console.log(error);
  }
};
