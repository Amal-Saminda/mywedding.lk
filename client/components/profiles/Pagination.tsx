"use client";

import { useState } from "react";

type PaginationProps = {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
};

export default function Pagination({ totalPages, initialPage = 1, onPageChange }: PaginationProps) {
  const [page, setPage] = useState(initialPage);

  function go(next: number) {
    const clamped = Math.min(Math.max(next, 1), totalPages);
    setPage(clamped);
    onPageChange?.(clamped);
  }

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className="mt-10 flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => go(page - 1)}
          disabled={page === 1}
          className="rounded-pill border border-plum px-5 py-2 text-sm font-medium text-plum transition-colors hover:bg-plum hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-plum"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => go(page + 1)}
          disabled={page === totalPages}
          className="rounded-pill border border-plum px-5 py-2 text-sm font-medium text-plum transition-colors hover:bg-plum hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-plum"
        >
          Next
        </button>
      </div>

      <ul className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <li key={n}>
            <button
              type="button"
              aria-current={n === page ? "page" : undefined}
              onClick={() => go(n)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                n === page
                  ? "bg-plum text-white"
                  : "bg-blush text-ink-soft hover:bg-rose-100"
              }`}
            >
              {n}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
