import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entities";
import { TReadContacts } from "../../interfaces";
import { readContactSchema } from "../../schemas";

const readContactService = async (): Promise<TReadContacts> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contacts: Contact[] = await contactRepo.find();

  const contactsReturn: TReadContacts = readContactSchema.parse(contacts);

  return contactsReturn;
};

export { readContactService };
