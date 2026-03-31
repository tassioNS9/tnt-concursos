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
  const limpar = useFiltroStore((state) => state.limpar);
  const fetchQuestions = useFiltroStore((state) => state.fetchQuestions);
  const setSearch = useFiltroStore((state) => state.setSearch);
  const search = useFiltroStore((state) => state.search);
  const total = useFiltroStore((state) => state.total);
  const isLoading = useFiltroStore((state) => state.isLoading);

  const handleFilter = async () => {
    await fetchQuestions();
  };

  const handleClear = () => {
    limpar();
  };

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
            className="border-border bg-white px-7"
            placeholder="Enuciado ou código da questão"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
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
          <Button className="pointer" variant="link" onClick={handleClear}>
            Limpar
          </Button>
          <Button
            className="pointer"
            variant="default"
            onClick={handleFilter}
            disabled={isLoading}
          >
            {isLoading ? "Carregando..." : "Filtrar"}
          </Button>
        </div>
      </div>
      <h3 className="mt-3 w-full px-2">
        {isLoading
          ? "Carregando..."
          : `${total.toLocaleString("pt-BR")} questões encontradas`}
      </h3>
    </div>
  );
};
