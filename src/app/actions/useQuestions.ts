import { useQuery } from "@tanstack/react-query";
import { useFiltroStore } from "@/app/store/filterQuestions";
export function useGetQuestions() {
  // Construir query key apenas baseado no trigger (refetch só quando clica em "Filtrar")

  const filtros = useFiltroStore((state) => state.filtros);
  const search = useFiltroStore((state) => state.search);
  const limit = useFiltroStore((state) => state.limit);
  const page = useFiltroStore((state) => state.page);
  const orderBy = useFiltroStore((state) => state.orderBy);
  const queryKey = ["questions", page, limit, filtros, orderBy];

  return useQuery({
    queryKey,
    queryFn: async () => {
      const params = new URLSearchParams();
      params.set("limit", limit.toString());
      params.set("page", page.toString());

      // Adicionar filtros aos parâmetros
      if (filtros.discipline.length > 0) {
        params.append("discipline", filtros.discipline.join(","));
      }
      if (filtros.jury.length > 0) {
        params.append("jury", filtros.jury.join(","));
      }
      if (filtros.organ.length > 0) {
        params.append("organ", filtros.organ.join(","));
      }
      if (filtros.position.length > 0) {
        params.append("position", filtros.position.join(","));
      }
      if (filtros.year.length > 0) {
        params.append("year", filtros.year.join(","));
      }
      if (search) {
        params.append("search", search);
      }

      const response = await fetch(`/api/questions?${params.toString()}`);
      if (!response.ok) {
        throw new Error("Erro ao buscar questões");
      }
      const questions = await response.json();
      return questions;
    },
  });
}
