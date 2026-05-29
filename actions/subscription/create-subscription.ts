'use server'

import prisma from "@/lib/db";
import { formSchema } from "@/lib/validations/schema"
import { ResponseAction } from "@/types"
import { revalidatePath } from "next/cache";

export async function createSubscription(values: unknown): Promise<ResponseAction>{
    const validatedFields = formSchema.safeParse(values);

    if(!validatedFields.success){
        return {success: false, error: 'Dados Inválidos'}
    }

    const {name, email, whatsapp, address, cpf, rg} = validatedFields.data;

    try {
        await prisma.subscription.create({
            data: {
                name,
                email,
                whatsapp,
                cpf,
                rg,
                address,
            }
        })

        revalidatePath('/')

        return {success: true, message: 'Formulário enviado!'}
    } catch (error) {
        return {success: false, error: 'Erro Interno do Servidor'}
    }
}