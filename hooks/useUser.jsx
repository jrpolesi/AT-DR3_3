import { useAPIContext } from "../context/API";
import { useQuery } from "./useQuery";

export function useUser() {
  const api = useAPIContext();

  const { data, error, isLoading } = useQuery(api.get.user);

  return {
    data: data && {
      avatarUrl: data.avatar_url,
      perfilUrl: data.html_url,
      name: data.name,
      bio: data.bio,
      login: data.login,
      followers: data.followers,
      following: data.following,
      publicRepos: data.public_repos,
      privateRepos: data.total_private_repos,
    },
    error,
    isLoading,
  };
}
