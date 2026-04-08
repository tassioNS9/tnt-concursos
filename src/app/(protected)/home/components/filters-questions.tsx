"use client";
import { MultiSelect } from "./multiselect";
import {
  disciplines,
  years,
  positions,
  jurys,
  organs,
} from "@/app/constants/optionsSelectors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowLeft } from "lucide-react";
import { useFiltroStore } from "@/app/store/filterQuestions";
import { FilterChips } from "./filter-chips";

interface FiltersQuestionsProps {
  total: number;
  isLoading: boolean;
}

export const FiltersQuestions = ({
  total,
  isLoading,
}: FiltersQuestionsProps) => {
  const discipline = useFiltroStore((state) => state.filtros.discipline);
  const jury = useFiltroStore((state) => state.filtros.jury);
  const year = useFiltroStore((state) => state.filtros.year);
  const organ = useFiltroStore((state) => state.filtros.organ);
  const position = useFiltroStore((state) => state.filtros.position);
  const toggleFiltro = useFiltroStore((state) => state.toggleFiltro);
  const limpar = useFiltroStore((state) => state.limpar);
  const setSearch = useFiltroStore((state) => state.setSearch);
  const triggerFetch = useFiltroStore((state) => state.triggerFetch);
  const search = useFiltroStore((state) => state.search);

  const handleClear = () => {
    limpar();
  };

  const handleFilter = () => {
    triggerFetch();
  };

  // Contar filtros selecionados
  const filtrosCount =
    discipline.length +
    jury.length +
    year.length +
    organ.length +
    position.length;

  return (
    <div className="flex w-full flex-col px-4">
      <h2 className="text-dark-var-1-color flex items-center gap-2 text-2xl font-bold">
        {" "}
        <ArrowLeft color="orange" />
        Questões de Concursos
      </h2>
      <div className="bg-foreground mt-8 flex w-full flex-col gap-4 rounded px-4 py-3">
        <div className="relative flex items-center">
          <Search className="absolute left-2" color="#878282" size="16" />
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-border h-12 bg-white px-7"
            placeholder="Enuciado ou código da questão"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <MultiSelect
            label="Disciplinas"
            options={disciplines}
            value={discipline}
            onChange={(value) => toggleFiltro("discipline", value)}
          />
          <MultiSelect
            label="Ano"
            options={years}
            value={year}
            onChange={(value) => toggleFiltro("year", value)}
          />
          <MultiSelect
            label="Cargo"
            options={positions}
            value={position}
            onChange={(value) => toggleFiltro("position", value)}
          />
          <MultiSelect
            label="Banca"
            options={jurys}
            value={jury}
            onChange={(value) => toggleFiltro("jury", value)}
          />
          <MultiSelect
            label="Orgão"
            options={organs}
            value={organ}
            onChange={(value) => toggleFiltro("organ", value)}
          />
        </div>
        <h3 className="text-left text-xl">
          <span className="text-muted-foreground text-sm">
            {filtrosCount === 0 ? (
              "  nenhum filtro selecionado"
            ) : (
              <div className="">
                <h2>Filtros selecionados: </h2>
                <FilterChips />
              </div>
            )}
          </span>
        </h3>
        <div className="flex justify-end gap-2">
          <Button className="pointer" variant="link" onClick={handleClear}>
            Limpar
          </Button>
          <Button
            className="pointer"
            variant="default"
            onClick={handleFilter}
            disabled={isLoading}
          >
            {isLoading ? "Carregando..." : "Filtrar Questões"}
          </Button>
        </div>
      </div>
      <h3 className="mt-3 w-full px-2">
        {isLoading ? "Carregando..." : `${total} questões encontradas`}
      </h3>
    </div>
  );
};
