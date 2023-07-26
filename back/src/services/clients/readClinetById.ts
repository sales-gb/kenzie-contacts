import { Repository } from "typeorm";
import { TClient } from "../../interfaces/clients.interfaces";
import Client from "../../entities/clients.entities";
import AppDataSource from "../../data-source";
import { clientSchema } from "../../schemas/clients.schema";

const readClientByIdService = async (clientId: number): Promise<TClient> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepo.findOneBy({
    id: clientId,
  });

  const clientReturn: TClient = clientSchema.parse(client);

  return clientReturn;
};

export { readClientByIdService };
