export function useMutation(fn) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function mutate(...args) {
    setLoading(true);
    setError(null);

    try {
      return await fn(...args);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  return {
    error,
    loading,
    mutate,
  };
}
