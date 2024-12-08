import { useEffect, useState } from "react";
import { useToastErrorContext } from "../context/ToastError.jsx";

export function useInfinityQuery(queryFn, options, onError) {
  const { setToastError } = useToastErrorContext();
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 0,
    pageSize: 5,
  });
  const [data, setData] = useState(null);
  const [state, setState] = useState({ isLoading: false, error: null });

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      page: 1,
    }));
  }, [JSON.stringify(options)]);

  useEffect(() => {
    setState({ isLoading: true, error: null });

    queryFn({
      ...options,
      page: pagination.page,
      per_page: pagination.pageSize,
    })
      .then(({ body, response }) => {
        const paginationLinks =
          response?.headers?.get("link")?.split?.(",") ?? [];

        const lastPage = paginationLinks?.find?.((p) =>
          p.includes('rel="last"')
        );
        const totalPages = lastPage?.match(/[?&]page=(\d+)/)?.[1] ?? 1;

        setPagination((prev) => {
          return {
            ...prev,
            totalPages: totalPages,
          };
        });

        setData((prevData) => {
          if (pagination.page === 1) {
            return body;
          }

          const findIDs = {};
          return [...prevData, ...body].filter(({ id }) => {
            if (findIDs[id]) {
              return false;
            }
            findIDs[id] = true;
            return true;
          });
        });

        setState({ isLoading: false, error: null });
      })
      .catch((error) => {
        setState({ isLoading: false, error });
        if (onError) {
          onError(error);
          return;
        }
        setToastError(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(options), pagination.page, queryFn]);

  function fetchNextPage() {
    setPagination((prev) => ({
      ...prev,
      page: Math.min(prev.page + 1, prev.totalPages),
    }));
  }

  function resetPagination() {
    setPagination((prev) => ({
      ...prev,
      page: 1,
    }));
  }

  return {
    pagination: {
      page: pagination.page,
      totalPages: pagination.totalPages,
      hasNextPage: pagination.page < pagination.totalPages,
      fetchNextPage,
      resetPagination,
    },
    data,
    isLoading: state.isLoading,
    isRefreshing: !!data && state.isLoading,
    error: state.error,
  };
}
