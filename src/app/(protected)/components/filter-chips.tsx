"use client";

import { useFiltroStore } from "@/app/store/filterQuestions";
import { Button } from "@/components/ui/button";
import { Chip } from "./chip";

export function FilterChips() {
  const { filtros, toggleFiltro, limpar } = useFiltroStore();

  const temFiltros =
    filtros.discipline.length || filtros.jury.length || filtros.year.length;

  if (!temFiltros) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {/* Disciplinas */}
      {filtros.discipline.map((d) => (
        <Chip
          key={`disciplina-${d}`}
          label={d}
          onRemove={() => toggleFiltro("discipline", d)}
        />
      ))}

      {/* Bancas */}
      {filtros.jury.map((b) => (
        <Chip
          key={`banca-${b}`}
          label={b}
          onRemove={() => toggleFiltro("jury", b)}
        />
      ))}

      {/* Ano */}
      {filtros.year.map((a) => (
        <Chip
          key={`year-${a}`}
          label={String(a)}
          onRemove={() => toggleFiltro("year", a)}
        />
      ))}

      {/* Limpar tudo */}
      <Button onClick={limpar}>Limpar filtros</Button>
    </div>
  );
}
