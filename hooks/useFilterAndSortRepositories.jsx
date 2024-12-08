import { useState } from "react";

const SORT_OPTIONS = [
  { key: "none", label: "Nenhum" },
  { key: "created", label: "Criação" },
  { key: "updated", label: "Atualização" },
  { key: "full_name", label: "Nome" },
];

const FILTER_OPTIONS = [
  { key: "none", label: "Nenhum" },
  { key: "public", label: "Público" },
  { key: "private", label: "Privado" },
];

export function useFilterAndSortRepositories() {
  const [sort, setSort] = useState();
  const [filter, setFilter] = useState();

  return {
    sort,
    setSort,
    sortOptions: SORT_OPTIONS,
    filter,
    setFilter,
    filterOptions: FILTER_OPTIONS,
  };
}
