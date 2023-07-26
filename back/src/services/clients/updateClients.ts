import { Repository } from "typeorm";
import { TClient, TUpdateClient } from "../../interfaces/clients.interfaces";
import AppDataSource from "../../data-source";
import Client from "../../entities/clients.entities";
import { clientSchema } from "../../schemas/clients.schema";

const updateClientService = async (
  clientData: TUpdateClient,
  clientId: number
): Promise<TClient> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const oldClientData: Client | null = await clientRepo.findOneBy({
    id: clientId,
  });

  const newClientData: Client = clientRepo.create({
    ...oldClientData,
    ...clientData,
  });
  await clientRepo.save(newClientData);

  const clientReturn: TClient = clientSchema.parse(newClientData);

  return clientReturn;
};

export { updateClientService };
