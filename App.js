import { SafeAreaView, StyleSheet } from "react-native";
import { Navigation } from "./components/Navigation";
import { APIProvider } from "./context/API";
import { AuthProvider } from "./context/Auth";
import { ToastErrorProvider } from "./context/ToastError";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthProvider>
        <ToastErrorProvider>
          <APIProvider>
            <Navigation />
          </APIProvider>
        </ToastErrorProvider>
      </AuthProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
