import { z } from "zod";
import { DeepPartial } from "typeorm";
import { contactSchema, contactSchemaReq, readContactSchema } from "../schemas";

type TContact = z.infer<typeof contactSchema>;
type TContactReq = z.infer<typeof contactSchemaReq>;
type TReadContacts = z.infer<typeof readContactSchema>;
type TUpdateContact = DeepPartial<TContactReq>;

export { TContact, TContactReq, TReadContacts, TUpdateContact };
