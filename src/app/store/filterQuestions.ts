import { create } from "zustand";

type Filtros = {
  discipline: string[];
  jury: string[];
  organ: string[];
  position: string[];
  year: string[];
};

type Store = {
  filtros: Filtros;
  isEmpty: boolean;
  toggleFiltro: (key: keyof Filtros, value: string) => void;
  limpar: () => void;
};

export const useFiltroStore = create<Store>((set) => ({
  filtros: {
    discipline: [],
    jury: [],
    organ: [],
    position: [],
    year: [],
  },
  isEmpty: true,

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

  limpar: () =>
    set({
      filtros: {
        discipline: [],
        jury: [],
        organ: [],
        position: [],
        year: [],
      },
      isEmpty: true,
    }),
}));
