import Image from "next/image";

export function Footer(){
    return(
        <footer className="bg-foreground text-primary-foreground py-12 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-8">
                    {/* Logo Picuruta */}
                    <div className="flex flex-col  items-center md:items-start gap-4">
                        <Image src='/logo.png' alt="Logo Escola de Surf Picuruta Salazar - Monocromática" className="rounded-full  object-contain" width={80} height={80} />
                        <p className="text-sm opacity-70">Escola de Surf Picuruta Salazar</p>
                    </div>

                    {/* CNPJ e Info */}
                    <div className="space-y-3">
                        <h4 className="font-display text-xl font-bold">Informações</h4>
                        <p className="text-sm opacity-70">CNPJ: 12.579.883/0001-15</p>
                        <p className="text-sm opacity-70">Quebra-Mar - José Menino, Santos - SP, 11065-201</p>
                        <p className="text-sm opacity-70">Data de fundação: 31/08/2010</p>
                    </div>

                    {/* FAQ */}
                    

                    {/* Mapa */}
                    <div className="space-y-3">
                        <h4 className="font-display text-xl font-bold">Localização</h4>
                        <div className="aspect-video w-full rounded overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps?q=escola+de+surf+picuruta+salazar&output=embed"
                                className="w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>

            {/* Prefeitura */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-15 h-15  bg-accent rounded flex items-center justify-center p-1">
                <Image src='svg-prefeitura.svg' alt="Logo Prefeitura" width={200} height={200}/>
              </div>
              <p className="text-xs opacity-50">
                Apoio: Prefeitura Municipal
              </p>
            </div>
            <p className="text-xs opacity-50">
              © {new Date().getFullYear()} Escola de Surf Picuruta Salazar. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    )
}