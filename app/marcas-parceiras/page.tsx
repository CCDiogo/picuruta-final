import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    name: "Kets",
    description:
      "A KETS é uma das marcas brasileiras mais populares no segmento de areias e granulados sanitários para gatos. Seus produtos são produzidos com matérias-primas 100% naturais, sem adição de componentes químicos que possam prejudicar a saúde dos animais. ",
    src: '/keets_logo.jpeg',
    href: 'https://www.instagram.com/kets.granulados/'
  },
  {
    name: "Salazar Ocean",
    description:
      "De surfista para surfista, a Salazar Ocean cria moda sem complicação, com peças duráveis que transcendem temporadas. Nossa proposta é um guarda-roupa atemporal, funcional e descomplicado, pensado para quem valoriza estilo e praticidade no dia a dia.",
    src: '/logo_salazar_ocean.png',
    href: 'https://www.instagram.com/salazarocean/'  
  },
];

export default function MarcasParceirasPage(){
    return(
        <section className="py-16 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h1 className="ffont-display text-6xl font-bold text-center mb-12">
            Marcas Parceiras
          </h1>

          <div className="space-y-12">
            {brands.map(({description, name, src, href}) => (
              <Link href={href} key={name} target="_blank" rel="no_refferrer" className="flex flex-col md:flex-row gap-8 items-center bg-card p-8 rounded-lg shadow-md hover:scale-105 duration-500 hover:shadow-xl">
                {/* Logo da marca */}
                <div className="w-48 h-48 shrink-0 bg-muted rounded-lg flex items-center justify-center">
                 <Image src={src} alt="Foto" width={190} height={190} /> 
                </div>
                <div>
                  <h2 className="font-display text-3xl mb-4">{name}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
}