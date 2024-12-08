import { useAPIContext } from "../context/API.jsx";
import { useInfinityQuery } from "./useInfinityQuery.jsx";

export function useIssues(options) {
  const api = useAPIContext();

  const { data, isLoading, error, isRefreshing, pagination } = useInfinityQuery(
    api.get.issues,
    options
  );

  return {
    data:
      data &&
      data.map((issue) => ({
        id: issue.id,
        title: issue.title,
        url: issue.html_url,
        state: issue.state,
        issueNumber: issue.number,
        comments: issue.comments,
      })),
    isLoading,
    isRefreshing,
    error,
    pagination,
  };
}
