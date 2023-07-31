import { Repository } from "typeorm";
import { TClientReq, TClientRes } from "../../interfaces/clients.interfaces";
import Client from "../../entities/clients.entities";
import AppDataSource from "../../data-source";
import { clientSchemaRes } from "../../schemas/clients.schema";

const createClientService = async (
  clientData: TClientReq
): Promise<TClientRes> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const client: Client = clientRepo.create(clientData);
  await clientRepo.save(client);

  const clientReturn: TClientRes = clientSchemaRes.parse(client);

  return clientReturn;
};

export { createClientService };
