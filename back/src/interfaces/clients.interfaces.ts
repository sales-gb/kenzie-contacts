import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  clientSchema,
  clientSchemaReq,
  clientSchemaRes,
} from "../schemas/clients.schema";

type TClient = z.infer<typeof clientSchema>;
type TClientReq = z.infer<typeof clientSchemaReq>;
type TClientRes = z.infer<typeof clientSchemaRes>;
type TUpdateClient = DeepPartial<TClientReq>;

export { TClient, TClientReq, TUpdateClient, TClientRes };
