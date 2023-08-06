import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppError } from "../../error";
import Client from "../../entities/clients.entities";
import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entities";

type TEmail = {
  phoneNumber: string;
};

const ensureContactPhoneNumberExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { phoneNumber }: TEmail = req.body;

  const contatRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const verifyPhoneNumber: Contact | null = await contatRepo.findOneBy({
    phoneNumber: phoneNumber,
  });

  if (verifyPhoneNumber) {
    throw new AppError("Phone number already exists", 409);
  }

  return next();
};

export { ensureContactPhoneNumberExistMiddleware };
