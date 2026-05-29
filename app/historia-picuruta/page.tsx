import { historySalazar } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export default function HistoriaPicurutaPage(){
    return(
        <section className="py-16 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-6xl font-bold text-center mb-12"> História do Picuruta Salazar</h1>

   

          {/* Artigo */}
          <article className="max-w-3xl mx-auto mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6 text-center">Quem é Picuruta Salazar</h2>
            <p>Alexandre Picuruta Salazar Junior, conhecido como <strong>Picuruta Salazar</strong> e apelidado de “Gato”, em referência à expressão popular de quem “cai sempre de pé”, é uma das maiores lendas do <strong>surf brasileiro</strong>.</p> 
              
            <p> Nascido em <Link className="font-bold text-[#2d5259] hover:underline"   href="https://pt.wikipedia.org/wiki/Ubatuba" target="_blank" rel="noopener noreferrer"> Ubatuba</Link>, SP, cresceu em contato direto com o mar, especialmente nas ondas de <Link className="font-bold text-[#2d5259] hover:underline" href="https://pt.wikipedia.org/wiki/Praia_de_Itamambuca" target="_blank" rel="noopener noreferrer">Itamambuca</Link>, onde iniciou sua trajetória no esporte. Desde cedo, demonstrou talento e dedicação, transformando sua paixão pelo surf em uma carreira marcada por conquistas históricas.</p>

            <p>Ao longo de décadas de atuação, Picuruta construiu um legado impressionante, tornando-se um dos maiores recordistas de títulos do Brasil. São cerca de <strong>170 vitórias em competições</strong>, um feito único na história do surf nacional, além de <strong>10 títulos brasileiros</strong>, com destaque para sua atuação no <strong>longboard</strong>.</p> 

              <p> No cenário internacional, conquistou o <strong>Taito Longboard Pro 2006</strong>, no Japão, e venceu o <Link className= "font-bold text-[#2d5259] hover:underline" href="https://isasurf.org/events/world-surfing-games/" target="_blank" rel="noopener noreferrer"> ISA World Surfing Games </Link> , considerado o campeonato mundial da modalidade.</p>

            <p>Entre seus feitos mais marcantes está o recorde de surfar uma mesma onda por aproximadamente <strong>12 km durante 35 minutos ininterruptos</strong>, durante o fenômeno natural da <strong>Pororoca</strong>, na foz do Rio Araguari, no Amapá — um dos maiores desafios do surf mundial.</p>

            <p>Atualmente, Picuruta é responsável pela <strong>Escola Pública de Surf Picuruta Salazar</strong>, em parceria com a <Link className="font-bold text-[#2d5259] hover:underline" href="https://www.santos.sp.gov.br/"target="_blank" rel="noopener noreferrer">Prefeitura Municipal de Santos</Link>. O projeto se tornou referência no litoral paulista, formando novos atletas e promovendo a inclusão social por meio do esporte.</p>
              
            <p>Reconhecido por sua técnica e profundo conhecimento do mar, Picuruta vai além das competições: atua como <strong>educador, mentor e formador de talentos</strong>, contribuindo diretamente para o crescimento do surf no Brasil.</p> 

            <p>Fora das águas, também ganhou destaque ao participar de programas de televisão, como <Link className="font-bold text-[#2d5259] underline" href="https://record.r7.com/troca-de-familia/" target="_blank" rel="noopener noreferrer">Troca de Família</Link> (2008) e o reality show <Link className="font-bold text-[#2d5259] hover:underline" href="https://www.imdb.com/pt/title/tt7476772/" target="_blank" rel="noopener noreferrer">Amazônia</Link> (2012), ampliando sua visibilidade e influência no cenário esportivo e cultural.</p>

          </article>

                 {/* Fotos do Picuruta */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {historySalazar.map(({alt, src}) => (
              <div key={src} className="relative aspect-square bg-muted rounded-lg flex items-center justify-center hover:scale-105 transition-all hover:shadow-md  ease-out duration-300" >
                   <Image src={src} alt={alt} fill priority loading="eager" className="object-cover object-top rounded-xl"/>
              </div>
            ))}
          </div>

          {/* Vídeo da história */}
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/fO3lf1SVt2E?start=0"
              title="Vídeo - História do Picuruta Salazar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full shadow-2xl"
            />
          </div>
        </div>
      </section>
    )
}