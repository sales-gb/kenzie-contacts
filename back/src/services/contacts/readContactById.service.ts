import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entities";
import { TContact } from "../../interfaces";
import { contactSchema } from "../../schemas";

const readContactByIdService = async (
  contactId: number,
  clientId: number
): Promise<Contact | null> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepo.findOne({
    where: {
      id: contactId,
      client: { id: clientId },
    },
  });

  return contact;
};

export { readContactByIdService };
