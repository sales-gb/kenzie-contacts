import { Request, Response } from "express";
import {
  TContact,
  TContactReq,
  TReadContacts,
  TUpdateContact,
} from "../interfaces";
import {
  createContactService,
  deleteContactService,
  readContactByIdService,
  readContactService,
  updateContactService,
} from "../services";
import Contact from "../entities/contacts.entities";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: TContactReq = req.body;
  const clientId = Number(res.locals.token.id);

  const newContact = await createContactService(contactData, clientId);

  return res.status(201).json(newContact);
};

const readContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = Number(res.locals.token.id);
  const contacts: Contact[] = await readContactService(clientId);

  return res.json(contacts);
};

const readContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = Number(res.locals.token.id);
  const contactId = Number(req.params.id);

  const contact: Contact | null = await readContactByIdService(
    contactId,
    clientId
  );

  return res.json(contact);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: TUpdateContact = req.body;

  const { id } = req.params;

  const contact: Contact = await updateContactService(contactData, Number(id));

  return res.status(200).json(contact);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  await deleteContactService(Number(id));

  return res.status(204).send();
};

export {
  createContactController,
  readContactsController,
  readContactController,
  updateContactController,
  deleteContactController,
};
