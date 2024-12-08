import { StyleSheet, Text, View } from "react-native";
import { LoginForm } from "../components/LoginForm";
import { useAuthContext } from "../context/Auth";

export function AuthScreen() {
  const { login } = useAuthContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Por favor, faça login para continuar</Text>

      <LoginForm onSubmit={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});
