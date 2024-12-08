import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
export function ToastError({ error, resetError }) {
  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        resetError();
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [error, resetError]);

  if (!error) {
    return null;
  }

  return (
    <View style={styles.toastError}>
      <Text style={styles.toastErrorIcon}>⚠️</Text>
      <Text style={styles.toastErrorMessage}>
        {error?.message ?? "Erro desconhecido"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toastError: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "red",
    position: "absolute",
    right: 20,
    top: 50,
    borderRadius: 5,
    maxWidth: "95%",
    maxHeight: "95%",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  toastErrorIcon: {
    fontSize: 18,
  },
  toastErrorMessage: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
