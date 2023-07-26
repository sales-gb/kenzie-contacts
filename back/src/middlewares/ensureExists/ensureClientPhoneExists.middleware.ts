import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppError } from "../../error";
import Client from "../../entities/clients.entities";
import AppDataSource from "../../data-source";

type TEmail = {
  phoneNumber: string;
};

const ensureClientPhoneNumberExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { phoneNumber }: TEmail = req.body;

  const userRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const verifyPhoneNumber: Client | null = await userRepo.findOneBy({
    phoneNumber: phoneNumber,
  });

  if (verifyPhoneNumber) {
    throw new AppError("Phone number already exists", 409);
  }

  return next();
};

export { ensureClientPhoneNumberExistMiddleware };
