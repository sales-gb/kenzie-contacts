import { Repository } from "typeorm";
import Client from "../../entities/clients.entities";
import AppDataSource from "../../data-source";

const deleteClientService = async (clientId: number): Promise<void> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepo.findOneBy({
    id: clientId,
  });

  await clientRepo.delete(client!);
};

export { deleteClientService };
