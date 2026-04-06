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
  search: string;
  limit: number;
  page: number;
  orderBy: string;
  isEmpty: boolean;
  fetchTrigger: number;
  toggleFiltro: (key: keyof Filtros, value: string) => void;
  toggleOrderBy: (orderBy: string) => void;
  toggleLimit: (limit: number) => void;
  setSearch: (search: string) => void;
  selectPage: (page: number) => void;
  triggerFetch: () => void;
  limpar: () => void;
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
  limit: 1,
  page: 1,
  orderBy: "desc",
  fetchTrigger: 0,

  toggleFiltro: (key: keyof Filtros, value: string) =>
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
  toggleLimit: (limit: number) => set({ limit }),
  toggleOrderBy: (orderBy: string) => set({ orderBy }),
  selectPage: (page: number) => set({ page }),
  triggerFetch: () =>
    set((state) => ({
      fetchTrigger: state.fetchTrigger + 1,
    })),
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
}));
