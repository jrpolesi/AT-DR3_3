import { useEffect, useState } from "react";
import { useToastErrorContext } from "../contexts/ToastError";

export function useInfinityQuery(queryFn, options, onError) {
  const { setToastError } = useToastErrorContext();
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 0,
    totalResults: 0,
    pageSize: 14,
  });
  const [data, setData] = useState(null);
  const [state, setState] = useState({ isLoading: false, error: null });

  useEffect(() => {
    setState({ isLoading: true, error: null });

    queryFn({
      ...options,
      page: pagination.page,
      page_size: pagination.pageSize,
    })
      .then(({ body }) => {
        const {
          collection: {
            items,
            metadata: { total_hits },
          },
        } = body;

        setPagination((prev) => {
          return {
            ...prev,
            totalPages: Math.ceil(total_hits / pagination.pageSize),
            totalResults: total_hits,
          };
        });

        setData((prevData) => {
          if (pagination.page === 1) {
            return items;
          }

          const findIDs = {};
          return [...prevData, ...items].filter(({ href }) => {
            if (findIDs[href]) {
              return false;
            }
            findIDs[href] = true;
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
      pageSize: pagination.pageSize,
    }));
  }

  return {
    pagination: {
      page: pagination.page,
      totalPages: pagination.totalPages,
      hasNextPage: pagination.page < pagination.totalPages,
      totalResults: pagination.totalResults,
      fetchNextPage,
      resetPagination,
    },
    data,
    isLoading: state.isLoading,
    error: state.error,
  };
}
