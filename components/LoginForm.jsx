import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FormField } from "./FormField.jsx";
import { SystemButton } from "./SystemButton.jsx";

export function LoginForm({ onSubmit }) {
  const [token, setToken] = useState("");

  function handleSubmit() {
    onSubmit(token);
  }

  return (
    <View style={styles.container}>
      <FormField label="Github Token">
        <TextInput
          style={styles.input}
          value={token}
          onChangeText={setToken}
          placeholder="Insira seu token do Github"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      </FormField>

      <SystemButton onPress={handleSubmit}>Login</SystemButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "#9c9c9c",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});
