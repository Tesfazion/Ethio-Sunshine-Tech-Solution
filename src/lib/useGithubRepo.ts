// Custom hook to fetch GitHub repository metadata.
// Use this for repo badges, stats, or project links on marketing pages.
import { useEffect, useState } from 'react';

export type GithubRepoInfo = {
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
};

export function useGithubRepo(owner: string, repo: string) {
  const [data, setData] = useState<GithubRepoInfo | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function run() {
      try {
        setStatus('loading');
        const resp = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
          signal: controller.signal,
          headers: { Accept: 'application/vnd.github+json' },
        });

        if (!resp.ok) throw new Error(`GitHub API returned ${resp.status}`);
        const json = (await resp.json()) as GithubRepoInfo;
        if (cancelled) return;
        setData(json);
        setStatus('ready');
      } catch (err) {
        if (cancelled) return;
        if (err instanceof DOMException && err.name === 'AbortError') return;
        setStatus('error');
      }
    }

    run();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [owner, repo]);

  return { data, status } as const;
}
