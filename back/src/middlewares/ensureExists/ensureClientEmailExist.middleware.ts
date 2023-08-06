import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppError } from "../../error";
import Client from "../../entities/clients.entities";
import AppDataSource from "../../data-source";

type TEmail = {
  email: string;
};

const ensureClientEmailExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email }: TEmail = req.body;

  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const verifyEmail: Client | null = await clientRepo.findOneBy({
    email: email,
  });

  if (verifyEmail) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

export { ensureClientEmailExistMiddleware };
