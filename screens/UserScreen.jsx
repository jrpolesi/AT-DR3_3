import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GitHubUser } from "../components/GitHubUser.jsx";
import { useUser } from "../hooks/useUser.jsx";

export function UserScreen() {
  const { data, isLoading } = useUser();

  if (!data && isLoading) {
    return <ActivityIndicator size={50} />;
  }

  if (!data) {
    return null;
  }

  return (
    <View style={styles.container}>
      <GitHubUser {...data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
