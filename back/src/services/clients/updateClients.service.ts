import { Repository } from "typeorm";
import {
  TClient,
  TClientRes,
  TUpdateClient,
} from "../../interfaces/clients.interfaces";
import AppDataSource from "../../data-source";
import Client from "../../entities/clients.entities";
import { clientSchemaRes } from "../../schemas/clients.schema";

const updateClientService = async (
  clientData: TUpdateClient,
  clientId: number
): Promise<TClientRes> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const oldClientData: Client | null = await clientRepo.findOneBy({
    id: clientId,
  });

  const newClientData: Client = clientRepo.create({
    ...oldClientData,
    ...clientData,
  });
  await clientRepo.save(newClientData);

  const clientReturn: TClientRes = clientSchemaRes.parse(newClientData);

  return clientReturn;
};

export { updateClientService };
