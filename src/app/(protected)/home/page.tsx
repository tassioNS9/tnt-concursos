import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowLeft } from "lucide-react";
import { disciplinas, ano } from "@/app/constants/optionsSelectors";
import { MultiSelect } from "../components/multiselect";
export default function Home() {
  return (
    <div className="mx-auto flex w-full items-center p-8">
      <div className="flex w-full flex-col px-16">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          {" "}
          <ArrowLeft color="orange" />
          Questões de Concursos
        </h2>
        <div className="mt-8 flex w-full flex-col gap-4 rounded bg-[#e5e1e1] px-2 py-3">
          <div className="relative flex items-center">
            <Search className="absolute left-2" color="#878282" size="16" />
            <Input
              type="text"
              className="border-border bg-white px-7"
              placeholder="Enuciado ou código da questão"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <MultiSelect label="Disciplinas" options={disciplinas} />
            <MultiSelect label="Ano" options={ano} />
            <MultiSelect label="Disciplinas" options={disciplinas} />
            <MultiSelect label="Disciplinas" options={disciplinas} />
            <MultiSelect label="Disciplinas" options={disciplinas} />
          </div>
          <h3 className="text-xl">
            Filtros selecionados:{" "}
            <span className="text-muted-foreground text-sm">
              {" "}
              os filtros aparecerão aqui
            </span>
          </h3>
          <div className="flex justify-end">
            <Button className="pointer" variant="link">
              Limpar
            </Button>
            <Button className="pointer" variant="default">
              Filtrar Filtros
            </Button>
          </div>
        </div>
        <h3 className="mt-3 w-full px-2">299.411 questões encontradas</h3>
      </div>
    </div>
  );
}
