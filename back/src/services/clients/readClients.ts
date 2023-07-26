import { Repository } from "typeorm";
import { TReadClients } from "../../interfaces/clients.interfaces";
import Client from "../../entities/clients.entities";
import AppDataSource from "../../data-source";
import { readClientSchema } from "../../schemas/clients.schema";

const readClientService = async (): Promise<TReadClients> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const clients: Client[] = await clientRepo.find();

  const clientsReturn: TReadClients = readClientSchema.parse(clients);

  return clientsReturn;
};

export { readClientService };
