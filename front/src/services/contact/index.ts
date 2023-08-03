import { parseCookies } from "nookies";
import { api } from "..";

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
