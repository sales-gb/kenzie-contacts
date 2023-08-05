import { Request, Response } from "express";
import {
  TClientReq,
  TClientRes,
  TUpdateClient,
} from "../interfaces/clients.interfaces";
import {
  createClientService,
  readClientByIdService,
  updateClientService,
  deleteClientService,
} from "../services";

const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientData: TClientReq = req.body;

  const newClient: TClientRes = await createClientService(clientData);

  return res.status(201).json(newClient);
};

const readClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = res.locals.token;

  const client: TClientRes = await readClientByIdService(Number(id));

  return res.json(client);
};

const updateClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientData: TUpdateClient = req.body;

  const { id } = res.locals.token;

  const client: TClientRes = await updateClientService(clientData, Number(id));

  return res.status(200).json(client);
};

const deleteClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = res.locals.token;

  await deleteClientService(Number(id));

  return res.status(204).send();
};

export {
  createClientController,
  readClientController,
  updateClientController,
  deleteClientController,
};
