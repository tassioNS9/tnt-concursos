"use client";

import { useFiltroStore } from "@/app/store/filterQuestions";
import { Chip } from "./chip";

export function FilterChips() {
  const { filtros, toggleFiltro } = useFiltroStore();

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

      {/* Orgão */}
      {filtros.organ.map((o) => (
        <Chip
          key={`organ-${o}`}
          label={o}
          onRemove={() => toggleFiltro("organ", o)}
        />
      ))}

      {/* Cargo */}
      {filtros.position.map((p) => (
        <Chip
          key={`position-${p}`}
          label={p}
          onRemove={() => toggleFiltro("position", p)}
        />
      ))}
    </div>
  );
}
