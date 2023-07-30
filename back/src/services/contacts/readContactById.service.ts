import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entities";
import { TContact } from "../../interfaces";
import { contactSchema } from "../../schemas";

const readContactByIdService = async (contactId: number): Promise<TContact> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepo.findOneBy({
    id: contactId,
  });

  const contactReturn: TContact = contactSchema.parse(contact);

  return contactReturn;
};

export { readContactByIdService };
