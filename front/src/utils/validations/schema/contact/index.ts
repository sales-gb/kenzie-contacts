import zod, { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().max(255),
  email: z.string().max(150).email(),
  phoneNumber: z.string().max(20),
});

export const updateContactSchema = contactSchema.partial();

export type TContactUpdate = zod.infer<typeof updateContactSchema>;
