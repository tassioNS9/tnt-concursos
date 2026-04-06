import { useFiltroStore } from "../store/filterQuestions";
import { useSearchParams } from "next/navigation";

type UsePaginationOptions = {
  totalItems: number;
  limit: number;
  currentPage: number;
};

const generatePages = (page: number, totalPages: number) => {
  const current = Math.min(page, totalPages);
  if (totalPages <= 7) {
    return [1, 2, 3, 4, 5, 6, 7].slice(0, totalPages);
  }

  if (current < 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  if (current === 3) {
    return [1, 2, 3, 4, "...", totalPages - 1, totalPages];
  }

  if (current > totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  if (current === totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, "...", current - 1, current, current + 1, "...", totalPages];
};

export function usePagination({
  totalItems,
  limit,
  currentPage,
}: UsePaginationOptions) {
  const searchParams = useSearchParams();
  const getParams = new URLSearchParams(searchParams.toString());
  const totalPages = Math.ceil(totalItems / limit); // arredonda para cima para garantir que haja uma página para os itens restantes
  const page = useFiltroStore((state) => state.page);
  const selectPage = useFiltroStore((state) => state.selectPage);
  const isCurrentPage = (n: number) => {
    return n === page;
  };
  const setPage = (n: number) => {
    selectPage(n);
    getParams.set("page", n.toString());
  };
  const arrayPages = generatePages(currentPage, totalItems);
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return {
    hasPreviousPage,
    hasNextPage,
    arrayPages,
    isCurrentPage,
    setPage,
  };
}
