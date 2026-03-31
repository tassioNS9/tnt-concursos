import { create } from "zustand";
import { Alternative } from "../generated/prisma/client";

type Filtros = {
  discipline: string[];
  jury: string[];
  organ: string[];
  position: string[];
  year: string[];
};

type Question = {
  id: string;
  statement: string;
  discipline: string;
  jury: string;
  organ: string;
  position: string;
  year: number;
  alternatives: Alternative[];
};

type Store = {
  filtros: Filtros;
  search: string;
  isEmpty: boolean;
  questions: Question[];
  total: number;
  isLoading: boolean;
  toggleFiltro: (key: keyof Filtros, value: string) => void;
  setSearch: (search: string) => void;
  limpar: () => void;
  fetchQuestions: () => Promise<void>;
};

export const useFiltroStore = create<Store>((set, get) => ({
  filtros: {
    discipline: [],
    jury: [],
    organ: [],
    position: [],
    year: [],
  },
  search: "",
  isEmpty: true,
  questions: [],
  total: 0,
  isLoading: false,

  toggleFiltro: (key, value) =>
    set((state) => {
      const atual = state.filtros[key];

      const existe = atual.includes(value);
      return {
        filtros: {
          ...state.filtros,
          [key]: existe ? atual.filter((v) => v !== value) : [...atual, value],
        },
        isEmpty: false,
      };
    }),

  setSearch: (search) => set({ search }),

  limpar: () =>
    set({
      filtros: {
        discipline: [],
        jury: [],
        organ: [],
        position: [],
        year: [],
      },
      search: "",
      isEmpty: true,
    }),

  fetchQuestions: async () => {
    set({ isLoading: true });

    try {
      const state = get();
      const params = new URLSearchParams();

      // Adicionar filtros aos parâmetros
      if (state.filtros.discipline.length > 0) {
        params.append("discipline", state.filtros.discipline.join(","));
      }
      if (state.filtros.jury.length > 0) {
        params.append("jury", state.filtros.jury.join(","));
      }
      if (state.filtros.organ.length > 0) {
        params.append("organ", state.filtros.organ.join(","));
      }
      if (state.filtros.position.length > 0) {
        params.append("position", state.filtros.position.join(","));
      }
      if (state.filtros.year.length > 0) {
        params.append("year", state.filtros.year.join(","));
      }
      if (state.search) {
        params.append("search", state.search);
      }

      const response = await fetch(`/api/questions?${params.toString()}`);
      const data = await response.json();

      if (response.ok) {
        set({
          questions: data.questions,
          total: data.total,
          isLoading: false,
        });
      } else {
        console.error("Erro ao buscar questões:", data.error);
        set({ isLoading: false });
      }
    } catch (error) {
      console.error("Erro ao buscar questões:", error);
      set({ isLoading: false });
    }
  },
}));
