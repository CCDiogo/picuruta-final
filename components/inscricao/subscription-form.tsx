'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema, SubscriptionFormData } from "@/lib/validations/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import {IMaskInput} from 'react-imask'
import { Spinner } from "../ui/spinner"
import { Send } from "lucide-react"
import Image from "next/image"
import { createSubscription } from "@/actions/subscription/create-subscription"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function SubscriptionForm(){
    const router = useRouter();

    const form = useForm<SubscriptionFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            address: '',
            whatsapp: '',
            email: '',
            cpf: '',
            rg: '', 
        }
    })

    const {control, formState, handleSubmit, clearErrors, setError, reset} = form

    async function onSubmit(values: SubscriptionFormData){
        try {
            const response = await createSubscription(values);

            if(!response.success){
                setError('root', {
                    type: 'manual',
                    message: response.error
                })

                toast.error(response.error)
                return ;
            }

            clearErrors('root')

            toast.success(response.message)
            reset()
            router.push('/ ')
        } catch (error) {
            toast.error('Erro interno do servidor')
        }
    }

    return (
        <Card className="w-full max-w-md shadow-md">
            <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
                <Image src='/logo.png' alt="Logo" width={100} height={100} loading="eager" />
            </div>
            <CardHeader className=" text-center">
                <CardTitle className="text-lg font-semibold">Formulário de Inscrição</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <FormField control={control} name="name" render={({field}) => (
                            <FormItem>
                                <FormLabel>Nome Completo</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Seu nome..." disabled={formState.isSubmitting} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="email" render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="example@mail.com" {...field} disabled={formState.isSubmitting} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="whatsapp" render={({field}) => (
                            <FormItem>
                                <FormLabel>WhatsApp</FormLabel>
                                <FormControl>
                                    <IMaskInput mask="(00) 00000-0000" placeholder="(13) 99999-9999" className="py-1.5 px-2 rounded-md border border-border" disabled={formState.isSubmitting} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        
                        <FormField control={control} name="address" render={({field}) => (
                            <FormItem>
                                <FormLabel>Endereço</FormLabel>
                                <FormControl>
                                    <Input placeholder="Av. Rei Pelé, 41" disabled={formState.isSubmitting} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="cpf" render={({field}) => (
                            <FormItem>
                                <FormLabel>CPF</FormLabel>
                                <FormControl>
                                    <IMaskInput mask="000.000.000-00" placeholder="000.000.000-00" className="py-1.5 px-2 rounded-md border border-border" {...field} disabled={formState.isSubmitting} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={control} name="rg" render={({field}) => (
                            <FormItem>
                                <FormLabel>RG</FormLabel>
                                <FormControl>
                                    <IMaskInput placeholder="00.000.000-0" mask='00.000.000-0' className="py-1.5 px-2 rounded-md border border-border" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <p className="text-xs text-muted-foreground">* Importante trazer em mãos 2 fotos 3x4, Comprovante de residencia e Atestado médico *</p>
                        <Button type="submit" className="w-full" disabled={formState.isSubmitting}>
                            {formState.isSubmitting ? (
                                <>
                                    <Spinner />
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <Send className="size-4" />
                                    Enviar
                                </>
                            )}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}