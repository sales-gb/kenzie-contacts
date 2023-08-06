import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entities";
import { TContact, TReadContacts } from "../../interfaces";
import { readContactSchema } from "../../schemas";

const readContactService = async (clientId: number): Promise<Contact[]> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contacts: Contact[] = await contactRepo.find({
    where: {
      client: { id: clientId },
    },
  });

  return contacts;
};

export { readContactService };
