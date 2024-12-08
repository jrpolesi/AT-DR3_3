import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { FilterAndSort } from "../components/FilterAndSort.jsx";
import { IssueItem } from "../components/IssueItem.jsx";
import { ListWithRefresh } from "../components/ListWithRefresh.jsx";
import { ProgressBar } from "../components/ProgressBar.jsx";
import { useFilterAndSortIssues } from "../hooks/useFilterAndSortIssues.jsx";
import { useIssues } from "../hooks/useIssues.jsx";

export function IssuesScreen() {
  const { sort, filter, filterOptions, setFilter, setSort, sortOptions } =
    useFilterAndSortIssues();

  const { data, isLoading, error, isRefreshing, pagination } = useIssues({
    sort,
    state: filter,
  });

  if (error) {
    return null;
  }

  if (!data && isLoading) {
    return <ActivityIndicator size={50} />;
  }

  return (
    <View style={styles.container}>
      <FilterAndSort
        filterOptions={filterOptions}
        filter={filter}
        onChangeFilter={setFilter}
        sortOptions={sortOptions}
        sort={sort}
        onChangeSort={setSort}
      />
      {!!data?.length ? (
        <ListWithRefresh
          data={data}
          isLoading={isLoading}
          isRefreshing={isRefreshing}
          fetchNextPage={pagination.fetchNextPage}
          resetPagination={pagination.resetPagination}
          hasNextPage={pagination.hasNextPage}
          renderItem={({ item }) => <IssueItem {...item} />}
        />
      ) : (
        <Text style={styles.emptyText}>
          {filter || sort
            ? "Nenhum resultado encontrado para a busca."
            : "Nenhuma item encontrado."}
        </Text>
      )}
      {!!data?.length && !!pagination.totalPages && (
        <ProgressBar current={pagination.page} total={pagination.totalPages} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 8,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginTop: 16,
    flex: 1,
  },
});
