import { schoolPictures } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export default function HistoriaPicurutaPage(){
    return(
        <section className="py-16 bg-background">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="font-display text-6xl font-bold text-center mb-12"> História da Escola</h1>

         {/* Fotos da escola */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {schoolPictures.map((image) => (
              <div key={image.src} className="relative aspect-square rounded-xl bg-muted flex items-center justify-center hover:scale-105 transition-all hover:shadow-md  ease-out duration-300">
                <Image src={image.src} alt={image.alt} fill className="object-cover rounded-xl" loading="eager" />
              </div>
            ))}
          </div>


          {/* Artigo */}
            <section className="max-w-5xl mx-auto px-6 py-12 text-zinc-800">

      <p className="indent-10 text-justify mb-4 leading-7">
        A <strong>Escola de Surf Picuruta Salazar</strong> é uma iniciativa da
        Associação Quebra-mar Picuruta Salazar em parceria com a{" "}
        <a
          href="https://www.santos.sp.gov.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2d5259] font-bold hover:underline"
        >
          Prefeitura de Santos
        </a>
        . Desde <strong>1997</strong>, o projeto oferece{" "}
        <strong>aulas totalmente gratuitas</strong> para alunos a{" "}
        <strong>partir de 7 anos</strong>, sem limite máximo de idade.
      </p>

      <p className="indent-10 text-justify mb-4 leading-7">
        Nosso trabalho une <strong>educação, esportes e consciência ambiental</strong>,
        além de promover campeonatos e provas esportivas para todas as gerações.
      </p>

      <p className="indent-10 text-justify mb-4 leading-7">
        Oferecemos toda a{" "}
        <a
          href="https://www.santos.sp.gov.br/?q=video/escola-de-surfe-e-competicao-picuruta-salazar-completa-24-anos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2d5259] font-bold hover:underline"
        >
          estrutura para a prática
        </a>{" "}
        do esporte. Os alunos têm acesso a pranchas adequadas para cada nível (
        <strong>softboards e longboards</strong>).
      </p>

      <p className="indent-10 text-justify mb-4 leading-7">
        Contamos também com o estreito acompanhamento de{" "}
        <strong>professores capacitados e salva-vidas</strong> prontos para
        garantir a segurança total no mar.
      </p>

      <p className="indent-10 text-justify mb-4 leading-7">
        Seja você um morador local ou alguém de passagem pela cidade, nossa
        equipe tem a <strong>modalidade ideal</strong> para o seu perfil e
        objetivo no mar.
      </p>
    </section>

           
          {/* Vídeo da história */}
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/cSMSKoEQzY8"
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