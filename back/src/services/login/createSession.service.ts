import { Repository } from "typeorm";
import { TLoginReq, TLoginRes } from "../../interfaces";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import Client from "../../entities/clients.entities";
import AppDataSource from "../../data-source";

const createSesionService = async (
  loginData: TLoginReq
): Promise<TLoginRes> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepo.findOne({
    where: {
      email: loginData.email,
    },
  });

  if (!client) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, client.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      email: client.email,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(client.id),
    }
  );

  return { token };
};

export { createSesionService };
