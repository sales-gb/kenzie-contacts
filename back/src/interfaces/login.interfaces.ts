import { z } from "zod";
import { loginSchema, loginSchemaRes } from "../schemas";

type TLoginReq = z.infer<typeof loginSchema>;
type TLoginRes = z.infer<typeof loginSchemaRes>;

export { TLoginReq, TLoginRes };
