import * as zod from "zod";

export const loginSchema = zod
  .object({
    email: zod
      .string()
      .nonempty("O campo e-mail é obrigatório!")
      .email("Informe um e-mail válido!"),
    password: zod.string().nonempty("O campo senha é obrigatório!"),
  })
  .required();

export type TLoginSchema = zod.infer<typeof loginSchema>;
