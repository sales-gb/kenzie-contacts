import * as zod from "zod";

export const registerSchema = zod
  .object({
    fullName: zod.string().nonempty("O campo Nome é obrigatório"),
    email: zod
      .string()
      .nonempty("O campo e-mail é obrigatório!")
      .email("Informe um e-mail válido!"),
    phoneNumber: zod
      .string()
      .nonempty("O campo contato é obrigatório!")
      .max(20),
    password: zod.string().nonempty("O campo senha é obrigatório!"),
  })
  .required();

export const updateUserSchema = registerSchema.partial();

export type TRegisterSchema = zod.infer<typeof registerSchema>;
export type TUpdateUserSchema = zod.infer<typeof updateUserSchema>;
