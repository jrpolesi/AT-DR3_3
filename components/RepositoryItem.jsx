import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { useLayoutOrientation } from "../hooks/useLayoutOrientation.jsx";
import { SystemButton } from "./SystemButton.jsx";

export function RepositoryItem({ name, description, stars, url }) {
  const { isPortrait } = useLayoutOrientation();

  return (
    <View style={styles.container(isPortrait)}>
      <View style={styles.main}>
        <View style={styles.header(isPortrait)}>
          <Text style={styles.title(isPortrait)}>{name}</Text>
          <Text style={styles.stars}>Stars: {stars}</Text>
        </View>

        <Text style={styles.description}>{description}</Text>
      </View>

      <SystemButton onPress={() => Linking.openURL(url)}>
        {isPortrait ? "Open in GitHub" : "GitHub"}
      </SystemButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (isPortrait) => ({
    padding: 16,
    borderColor: "#a7a7a7",
    borderWidth: 1,
    borderRadius: 5,
    gap: 20,
    flexDirection: isPortrait ? "column" : "row",
    justifyContent: "space-between",
    alignItems: isPortrait ? "stretch" : "flex-start",
  }),
  main: {
    gap: 6,
    flex: 1,
  },
  header: (isPortrait) => ({
    flexDirection: isPortrait ? "column" : "row",
    alignItems: "flex-start",
    gap: isPortrait ? 6 : 12,
  }),
  title: (isPortrait) => ({
    fontSize: 18,
    fontWeight: "bold",
    flex: isPortrait ? 0 : 1,
  }),
  description: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  stars: {
    fontSize: 14,
    color: "#333",
  },
  button: {
    marginTop: 10,
  },
});
