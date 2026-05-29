import z from "zod";

export const formSchema = z.object({
  name: z.string().min(1),
  whatsapp: z.string().min(1),
  address: z.string().min(1),
  email: z.email(),
  cpf: z.string().min(1),
  rg: z.string().min(1),
})

export type SubscriptionFormData = z.infer<typeof formSchema>;