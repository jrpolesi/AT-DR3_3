import { ActivityIndicator, FlatList, StyleSheet } from "react-native";

export function ListWithRefresh({
  data,
  isLoading,
  isRefreshing,
  fetchNextPage,
  resetPagination,
  hasNextPage,
  ...props
}) {
  return (
    <FlatList
      {...props}
      data={data}
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
