import { Repository } from "typeorm";
import Client from "../../entities/clients.entities";
import AppDataSource from "../../data-source";
import { TContact, TContactReq } from "../../interfaces";
import Contact from "../../entities/contacts.entities";
import { contactSchema } from "../../schemas";

const createContactService = async (
  contactData: TContactReq,
  clientId: number
): Promise<TContact> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const client: Client | null = await clientRepo.findOneBy({
    id: clientId,
  });

  const contact: Contact = contactRepo.create({
    ...contactData,
    client: client!,
  });
  await contactRepo.save(contact);

  const contactFormatted = {
    ...contact,
    clientId: contact.client.id,
  };

  const contactReturn: TContact = contactSchema.parse(contactFormatted);

  return contactReturn;
};

export { createContactService };
