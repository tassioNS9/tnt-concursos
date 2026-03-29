"use client";
import { MultiSelect } from "../../components/multiselect";
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
import { FilterChips } from "../../components/filter-chips";
export const FiltersQuestions = () => {
  const setDiscipline = useFiltroStore((state) => state.filtros.discipline);
  const setJury = useFiltroStore((state) => state.filtros.jury);
  const setYear = useFiltroStore((state) => state.filtros.year);
  const setOrgan = useFiltroStore((state) => state.filtros.organ);
  const setPosition = useFiltroStore((state) => state.filtros.position);
  const toggleFiltro = useFiltroStore((state) => state.toggleFiltro);

  return (
    <div className="flex w-full flex-col px-2">
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

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <MultiSelect
            label="Disciplinas"
            options={disciplines}
            value={setDiscipline}
            onChange={(value) => toggleFiltro("discipline", value)}
          />
          <MultiSelect
            label="Ano"
            options={years}
            value={setYear}
            onChange={(value) => toggleFiltro("year", value)}
          />
          <MultiSelect
            label="Cargo"
            options={positions}
            value={setPosition}
            onChange={(value) => toggleFiltro("position", value)}
          />
          <MultiSelect
            label="Banca"
            options={jurys}
            value={setJury}
            onChange={(value) => toggleFiltro("jury", value)}
          />
          <MultiSelect
            label="Orgão"
            options={organs}
            value={setOrgan}
            onChange={(value) => toggleFiltro("organ", value)}
          />
        </div>
        <h3 className="text-xl">
          Filtros selecionados:
          <span className="text-muted-foreground text-sm">
            {toggleFiltro.length === 0 ? (
              "  os filtros aparecerão aqui"
            ) : (
              <FilterChips />
            )}
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
  );
};
