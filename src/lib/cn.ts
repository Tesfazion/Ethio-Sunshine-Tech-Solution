// Class name utility for conditional Tailwind/utility composition.
// Use this helper to keep component JSX clean and avoid repeated string logic.
export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}
