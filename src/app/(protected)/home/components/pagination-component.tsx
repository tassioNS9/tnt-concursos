"use client";

import { usePagination } from "@/app/actions/usePagination";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
interface PaginationComponentProps {
  // Você pode adicionar props aqui, como totalPages, currentPage, onPageChange, etc.
  total: number;
  currentPage: number;
  limit: number;
}

export function PaginationComponent({
  total,
  currentPage,
  limit,
}: PaginationComponentProps) {
  const { hasPreviousPage, hasNextPage, arrayPages, isCurrentPage, setPage } =
    usePagination({
      totalItems: total,
      limit: limit,
      currentPage: currentPage,
    });

  const handlePreviousPage = () => {
    if (hasPreviousPage) {
      setPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (hasNextPage) {
      setPage(currentPage + 1);
    }
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`${hasPreviousPage ? "hover:cursor-pointer" : "pointer-events-none text-slate-300"}`}
            onClick={handlePreviousPage}
          />
        </PaginationItem>
        {arrayPages.map((page, index) =>
          typeof page === "number" ? (
            <PaginationItem key={index}>
              <PaginationLink
                className="hover:cursor-pointer"
                onClick={() => setPage(page)}
                isActive={isCurrentPage(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={index}>
              <PaginationEllipsis />
            </PaginationItem>
          ),
        )}
        <PaginationItem>
          <PaginationNext
            className={`${hasNextPage ? "hover:cursor-pointer" : "pointer-events-none text-slate-300"}`}
            onClick={handleNextPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
