import { z } from "zod";

const clientSchema = z.object({
  id: z.number(),
  fullName: z.string().max(150),
  password: z.string().max(150),
  email: z.string().max(100).email(),
  phoneNumber: z.string().max(20),
  createdAt: z.string(),
});

const clientSchemaReq = clientSchema.omit({
  id: true,
  createdAt: true,
});

const clientSchemaRes = clientSchema.omit({
  password: true,
});

const readClientSchema = z.array(clientSchemaRes);

const updateClientSchema = clientSchemaReq.partial();

export {
  clientSchema,
  clientSchemaReq,
  readClientSchema,
  updateClientSchema,
  clientSchemaRes,
};
