import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { useLayoutOrientation } from "../hooks/useLayoutOrientation";
import { SystemButton } from "./SystemButton";

export function IssueItem({ title, state, issueNumber, url, comments }) {
  const { isPortrait } = useLayoutOrientation();

  return (
    <View style={styles.container(isPortrait)}>
      <View style={styles.main}>
        <Text style={styles.header}>
          <Text style={styles.title}>{title}</Text>{" "}
          <Text style={styles.issueNumber}>#{issueNumber}</Text>
        </Text>

        <Text style={styles.comments}>{comments} comentários</Text>
        <Text style={styles.state(state === "open")}>{state}</Text>
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
  header: {
    alignItems: "flex-end",
    gap: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  issueNumber: {
    fontSize: 16,
    color: "#0d3d86",
    fontWeight: "bold",
  },
  state: (isOpen) => ({
    fontSize: 14,
    backgroundColor: isOpen ? "#28a745" : "#cb2431",
    color: "white",
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    overflow: "hidden",
    flex: 1,
    textTransform: "capitalize",
  }),
  comments: {
    fontSize: 14,
    color: "#333",
  },
  button: {
    marginTop: 10,
  },
});
