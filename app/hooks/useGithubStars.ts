import { useEffect, useState } from "react";

type UseGithubStarsOptions = {
  owner?: string;
  repo?: string;
};

type GithubRepoResponse = {
  stargazers_count?: number;
};

export const useGithubStars = (
  { owner = "BuildNShip", repo = "shopifyornot" }: UseGithubStarsOptions = {},
) => {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchStars = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub stars");
        }

        const data = (await response.json()) as GithubRepoResponse;

        if (!cancelled) {
          setStars(
            typeof data.stargazers_count === "number"
              ? data.stargazers_count
              : null,
          );
        }
      } catch (requestError) {
        if (!cancelled) {
          setError(
            requestError instanceof Error
              ? requestError.message
              : "Unable to load GitHub stars",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    void fetchStars();

    return () => {
      cancelled = true;
    };
  }, [owner, repo]);

  return {
    stars,
    loading,
    error,
  };
};

