import { ActivityIndicator, StyleSheet, View } from "react-native";
import { RepositoriesList } from "../components/RepositoriesList";
import { useRepositories } from "../hooks/useRepositories";

export function RepositoriesScreen() {
  const { data, isLoading, error, isRefreshing, pagination } =
    useRepositories();

  if (error) {
    return null;
  }

  if (!data && isLoading) {
    return <ActivityIndicator size={50} />;
  }

  return (
    <View style={styles.container}>
      <RepositoriesList
        data={data}
        isLoading={isLoading}
        isRefreshing={isRefreshing}
        fetchNextPage={pagination.fetchNextPage}
        resetPagination={pagination.resetPagination}
        hasNextPage={pagination.hasNextPage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
