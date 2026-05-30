import { Card, CardContent } from "@/components/ui/card";
import { qrPictures } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export default function AulasParticularesPage(){
    return(
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="font-display text-6xl font-bold text-center mb-12">
                        Aulas Particulares
                    </h1>
                    <p className="max-w-2xl mx-auto">
                        Aprenda surfar com os melhores professores de surf da escola <span className="font-bold">Picuruta Salazar</span>
                    </p>
                    <div className="space-y-4">
                        <h2 className="mt-6 text-4xl font-semibold ">Do Iniciante ao avançado</h2>
                        <p className="max-w-lg text-center mx-auto underline" >LONGBOARD | STANDUP</p>
                        <p className="text-sm text-muted-foreground">Leia o Qr Code ou clique na imagem para entrar em contato</p>
                    </div>
                </div>

              <div className="mt-16 grid lg:grid-cols-3 gap-14 lg:gap-6">
                    {qrPictures.map(({href, name, qr, src})=> (
                        <div key={name} className="flex flex-col gap-y-4 items-center">
                            <Link href={href} target="_blank">
                                <Image src={qr} alt={name} width={200} height={200} className="rounded-xl" loading="eager" />
                            </Link>
                            <Link href={href} target="_blank" className="">
                                <>
                                    <Image src={src} alt={name} width={200} height={200} className="rounded-xl object-cover" loading="eager" />
                                    <p className="mt-2 text-center text-xs text-muted-foreground">{name}</p>
                                </>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

