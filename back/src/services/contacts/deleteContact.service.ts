import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entities";

const deleteContactService = async (clientId: number): Promise<void> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepo.findOneBy({
    id: clientId,
  });

  await contactRepo.remove(contact!);
};

export { deleteContactService };
