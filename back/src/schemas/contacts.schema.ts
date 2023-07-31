import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  fullName: z.string().max(150),
  email: z.string().max(100).email(),
  phoneNumber: z.string().max(20),
  createdAt: z.string(),
  clientId: z.number(),
});

const contactSchemaReq = contactSchema.omit({
  id: true,
  createdAt: true,
});

const readContactSchema = z.array(contactSchema);

const updateContactSchema = contactSchemaReq.partial();

export {
  contactSchema,
  contactSchemaReq,
  readContactSchema,
  updateContactSchema,
};
