import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entities";
import { TContact, TUpdateContact } from "../../interfaces";
import { contactSchema } from "../../schemas";

const updateContactService = async (
  contactData: TUpdateContact,
  clientId: number
): Promise<TContact> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const oldClientData: Contact | null = await contactRepo.findOneBy({
    id: clientId,
  });

  const newContactData: Contact = contactRepo.create({
    ...oldClientData,
    ...contactData,
  });
  await contactRepo.save(newContactData);

  const contactReturn: TContact = contactSchema.parse(newContactData);

  return contactReturn;
};

export { updateContactService };
