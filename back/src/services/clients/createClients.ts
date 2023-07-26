import { Repository } from "typeorm";
import { TClient, TClientReq } from "../../interfaces/clients.interfaces";
import Client from "../../entities/clients.entities";
import AppDataSource from "../../data-source";
import { clientSchema } from "../../schemas/clients.schema";

const createClientService = async (
  clientData: TClientReq
): Promise<TClient> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const client: Client = clientRepo.create(clientData);
  await clientRepo.save(client);

  const clientReturn: TClient = clientSchema.parse(client);

  return clientReturn;
};

export { createClientService };
