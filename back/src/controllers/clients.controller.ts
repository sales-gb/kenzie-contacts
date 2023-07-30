import { Request, Response } from "express";
import {
  TClientReq,
  TClientRes,
  TReadClients,
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

  const newClient: TClientRes = await createClientService(clientData);

  return res.status(201).json(newClient);
};

const readClientsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clients: TReadClients = await readClientService();

  return res.json(clients);
};

const readClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = parseInt(req.params.id);

  const client: TClientRes = await readClientByIdService(clientId);

  return res.json(client);
};

const updateClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientData: TUpdateClient = req.body;

  const { id } = req.params;

  const client: TClientRes = await updateClientService(clientData, Number(id));

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
