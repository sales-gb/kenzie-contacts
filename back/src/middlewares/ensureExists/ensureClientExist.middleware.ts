import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import Client from "../../entities/clients.entities";
import AppDataSource from "../../data-source";
import { userInfo } from "os";
import { AppError } from "../../error";

const ensureClientExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const clientId: number = parseInt(res.locals.token.id);
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepo.findOneBy({
    id: clientId,
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  return next();
};

export { ensureClientExistMiddleware };
