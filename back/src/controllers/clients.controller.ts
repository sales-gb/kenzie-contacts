import { Request, Response } from "express";
import {
  TClient,
  TClientReq,
  TUpdateClient,
} from "../interfaces/clients.interfaces";

import {
  createClientService,
  readClientService,
  readClientByIdService,
  updateClientService,
  deleteClientService,
} from "../services";

const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientData: TClientReq = req.body;

  const newClient = await createClientService(clientData);

  return res.status(201).json(newClient);
};

const readClientsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clients = await readClientService();

  return res.json(clients);
};

const readClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = parseInt(req.params.id);

  const client = await readClientByIdService(clientId);

  return res.json(client);
};

const updateClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientData: TUpdateClient = req.body;

  const { id } = req.params;

  const client: TClient = await updateClientService(clientData, Number(id));

  return res.status(200).json(client);
};

const deleteClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  await deleteClientService(Number(id));

  return res.status(204).send();
};

export {
  createClientController,
  readClientsController,
  readClientController,
  updateClientController,
  deleteClientController,
};
