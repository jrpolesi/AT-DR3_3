import { SafeAreaView, StyleSheet } from "react-native";
import { Navigation } from "./components/Navigation.jsx";
import { APIProvider } from "./context/API.jsx";
import { AuthProvider } from "./context/Auth.jsx";
import { ToastErrorProvider } from "./context/ToastError.jsx";

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
