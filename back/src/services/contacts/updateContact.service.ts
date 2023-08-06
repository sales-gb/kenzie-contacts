import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entities";
import { TContact, TUpdateClient, TUpdateContact } from "../../interfaces";
import { contactSchema, updateContactSchema } from "../../schemas";

const updateContactService = async (
  contactData: TUpdateContact,
  contactId: number
): Promise<Contact> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const oldClientData: Contact | null = await contactRepo.findOneBy({
    id: contactId,
  });

  const newContactData: Contact = contactRepo.create({
    ...oldClientData,
    ...contactData,
  });
  await contactRepo.save(newContactData);

  return newContactData;
};

export { updateContactService };
