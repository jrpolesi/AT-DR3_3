import { useAPIContext } from "../context/API.jsx";
import { useInfinityQuery } from "./useInfinityQuery.jsx";

export function useRepositories(options) {
  const api = useAPIContext();

  const { data, isLoading, error, isRefreshing, pagination } = useInfinityQuery(
    api.get.repositories,
    options
  );

  return {
    data:
      data &&
      data.map((repo) => ({
        id: repo.id,
        name: repo.full_name,
        description: repo.description,
        stars: repo.stargazers_count,
        url: repo.html_url,
      })),
    isLoading,
    isRefreshing,
    error,
    pagination,
  };
}
