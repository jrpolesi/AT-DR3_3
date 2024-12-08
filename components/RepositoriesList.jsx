import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { RepositoryItem } from "./RepositoryItem";

export function RepositoriesList({
  data,
  isLoading,
  isRefreshing,
  fetchNextPage,
  resetPagination,
  hasNextPage,
}) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <RepositoryItem {...item} />}
      keyExtractor={(item) => item.id}
      ListFooterComponent={isLoading && ActivityIndicator}
      refreshing={!!isRefreshing}
      onRefresh={resetPagination}
      onEndReached={() => hasNextPage && fetchNextPage()}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});
