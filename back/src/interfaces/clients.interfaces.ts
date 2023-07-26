import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  clientSchema,
  clientSchemaReq,
  readClientSchema,
} from "../schemas/clients.schema";

type TClient = z.infer<typeof clientSchema>;
type TClientReq = z.infer<typeof clientSchemaReq>;
type TReadClients = z.infer<typeof readClientSchema>;
type TUpdateClient = DeepPartial<TClientReq>;

export { TClient, TClientReq, TReadClients, TUpdateClient };
