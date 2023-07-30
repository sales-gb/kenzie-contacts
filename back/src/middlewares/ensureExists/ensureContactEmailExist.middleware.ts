import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppError } from "../../error";
import Client from "../../entities/clients.entities";
import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entities";

type TEmail = {
  email: string;
};

const ensureContactEmailExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email }: TEmail = req.body;

  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const verifyEmail: Contact | null = await contactRepo.findOneBy({
    email: email,
  });

  if (verifyEmail) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

export { ensureContactEmailExistMiddleware };
