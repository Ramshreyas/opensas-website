/**
 * Resolve a path relative to the site's base URL.
 * Use in Astro frontmatter or templates like: href={path("/architecture")}
 * The base is provided by import.meta.env.BASE_URL at build time.
 */
export const base = import.meta.env.BASE_URL;

export function path(p: string): string {
  // p should start with "/", e.g. "/architecture"
  // Trim trailing slash from base and handle double-slash edge case
  const b = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${b}${p}`;
}
