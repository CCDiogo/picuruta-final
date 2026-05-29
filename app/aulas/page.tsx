
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const hours = [
  { day: "Segunda", class1: "08:00 - 10:00", class2: "14:00 - 16:00" },
  { day: "Terça", class1: "08:00 - 10:00", class2: "14:00 - 16:00" },
  { day: "Quarta", class1: "08:00 - 10:00", class2: "14:00 - 16:00" },
  { day: "Quinta", class1: "08:00 - 10:00", class2: "14:00 - 16:00" },
  { day: "Sexta", class1: "08:00 - 10:00", class2: "14:00 - 16:00" },
  { day: "Sábado", class1: "09:00 - 11:00", class2: "—" },
];

export default function AulasPage(){
    return(
        <section className="py-16 bg-background">
            <div className="container mx-auto max-w-4xl">
                <h1 className="font-display text-6xl font-bold text-center mb-12">Horários</h1>

                {/* Tabela de Horários */}
                <div className="mb-16 overflow-x-auto">
                    <h2 className="font-display text-4xl mb-6">Horários das Aulas</h2>
                    <div className="rounded-xl border bg-card overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-[#f6bc48] hover:bg-[#f6bc48] font-extrabold">
                                    <TableHead className="font-display text-base">Dia</TableHead>
                                    <TableHead className="font-display text-base">Turma 1</TableHead>
                                    <TableHead className="font-display text-base">Turma 2</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {hours.map((hour, index) => (
                                    <TableRow key={hour.day} className="transition-colors hover:bg-blue-100">
                                        <TableCell className="font-semibold text-foreground">{hour.day}</TableCell>
                                        <TableCell>{hour.class1}</TableCell>
                                        <TableCell>{hour.class2}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>       

                    <div>
                        <h3 className="text-2xl font-bold text-center mt-10 mb-6">
        Aulas Públicas
      </h3>

      <p className="indent-10 text-justify mb-4 leading-7">
        As <strong>aulas públicas gratuitas</strong> estão disponíveis! As{" "}
        <strong>vagas são limitadas</strong>, por isso, entre em contato o
        quanto antes para garantir a sua.
      </p>

      <p className="indent-10 text-justify leading-7">
        Caso as turmas estejam cheias, você pode deixar seu nome e contato em
        nossa <strong>lista de espera</strong>. Fique por dentro de datas,
        prazos e novidades através da nossa{" "}
        <a
          href="https://www.instagram.com/escoladesurfpicurutasalazar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2d5259] font-bold hover:underline"
        >
          página oficial no Instagram
        </a>
        .
      </p>
                    </div>
                </div>
        </div>
      </section>
    )
}