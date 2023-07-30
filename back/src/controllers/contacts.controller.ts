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

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: TContactReq = req.body;
  const clientId = res.locals.token.id;

  const newContact: TContact = await createContactService(
    contactData,
    clientId
  );

  return res.status(201).json(newContact);
};

const readContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contacts: TReadContacts = await readContactService();

  return res.json(contacts);
};

const readContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = parseInt(req.params.id);

  const contact: TContact = await readContactByIdService(contactId);

  return res.json(contact);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: TUpdateContact = req.body;

  const { id } = req.params;

  const contact: TContact = await updateContactService(contactData, Number(id));

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
