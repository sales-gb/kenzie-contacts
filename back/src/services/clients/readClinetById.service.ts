import { Repository } from "typeorm";
import { TClientRes } from "../../interfaces/clients.interfaces";
import Client from "../../entities/clients.entities";
import AppDataSource from "../../data-source";
import { clientSchemaRes } from "../../schemas/clients.schema";

const readClientByIdService = async (clientId: number): Promise<TClientRes> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepo.findOneBy({
    id: clientId,
  });

  const clientReturn: TClientRes = clientSchemaRes.parse(client);

  return clientReturn;
};

export { readClientByIdService };
