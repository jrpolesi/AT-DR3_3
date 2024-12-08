import React from "react";
import { Image, Linking, StyleSheet, Text, View } from "react-native";
import { useLayoutOrientation } from "../hooks/useLayoutOrientation";
import { SystemButton } from "./SystemButton";

export function GitHubUser({
  avatarUrl,
  name,
  bio,
  login,
  followers,
  following,
  perfilUrl,
  publicRepos,
  privateRepos,
}) {
  const { isPortrait } = useLayoutOrientation();

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer(isPortrait)}>
        <View style={styles.header(isPortrait)}>
          <Image
            source={{ uri: avatarUrl }}
            style={styles.avatar(isPortrait)}
          />

          <View style={styles.headerInfo}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.login}>{login}</Text>
            <Text style={styles.bio}>{bio}</Text>
          </View>
        </View>

        <View style={styles.repoContainer}>
          <Text style={styles.repoTitle}>Repositórios</Text>

          <View style={styles.repos(isPortrait)}>
            <View style={styles.repo}>
              <Text style={styles.repoText}>Públicos {publicRepos}</Text>
            </View>
            <View style={styles.repo}>
              <Text style={styles.repoText}>Privados {privateRepos}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer(isPortrait)}>
        <View style={styles.stats}>
          <Text style={styles.statsText}>Followers: {followers}</Text>
          <Text style={styles.statsText}>Following: {following}</Text>
        </View>
        <SystemButton
          onPress={() => {
            Linking.openURL(perfilUrl);
          }}
          style={styles.perfilUrlButton}
        >
          GitHub
        </SystemButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
    flex: 1,
  },
  bodyContainer: (isPortrait) => ({
    gap: 20,
    flexGrow: isPortrait ? 1 : 0,
    flexDirection: isPortrait ? "column" : "row",
  }),
  header: (isPortrait) => ({
    gap: 20,
    flexDirection: isPortrait ? "column" : "row",
    flexGrow: isPortrait ? 0 : 1,
  }),
  avatar: (isPortrait) => ({
    width: 150,
    height: 150,
    borderRadius: 30,
    alignSelf: isPortrait ? "center" : "flex-start",
  }),
  headerInfo: {
    gap: 1,
  },
  name: {
    fontSize: 24,
  },
  login: {
    fontSize: 16,
    color: "#666",
    fontStyle: "italic",
  },
  bio: {
    marginTop: 10,
    color: "#333",
  },
  repoContainer: {
    gap: 10,
  },
  repoTitle: {
    fontSize: 20,
  },
  repos: (isPortrait) => ({
    gap: 10,
    flexDirection: isPortrait ? "row" : "column",
  }),
  repo: {
    padding: 10,
    backgroundColor: "#505050",
    borderRadius: 8,
    overflow: "hidden",
    width: 110,
    alignItems: "center",
    marginRight: 10,
  },
  repoText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer: (isPortrait) => ({
    gap: 20,
    flexDirection: isPortrait ? "column" : "row",
    alignItems: isPortrait ? "stretch" : "center",
    justifyContent: "flex-end",
  }),
  stats: {
    flexDirection: "row",
    gap: 20,
  },
  statsText: {
    fontSize: 16,
    color: "#113d70",
  },
  perfilUrlButton: {
    backgroundColor: "#0f519d",
  },
});
