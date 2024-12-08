import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FormField } from "./FormField";
import { SystemButton } from "./SystemButton";

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
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});
