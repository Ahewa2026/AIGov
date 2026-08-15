const paths: Record<string, string> = {
  grid: "M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z",
  layers:
    "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5",
  shield:
    "M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z",
  lock: "M6 11V8a6 6 0 1112 0v3M5 11h14v9H5v-9zM12 15v2",
  scale:
    "M12 3v3m0 0l-5 9a5 5 0 0010 0l-5-9zm0 0l7 2m-7-2L5 5m14 10l-7 2 7 2zM5 15l7 2-7 2",
  users:
    "M9 11a4 4 0 100-8 4 4 0 000 8zm7 8v-1a5 5 0 00-5-5H7a5 5 0 00-5 5v1m17 0v-1a4 4 0 00-3-3.87M14 3.13a4 4 0 010 7.75",
  activity: "M22 12h-4l-3 9-6-18-3 9H2",
  share:
    "M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4-4 4M12 2v14",
  plug: "M9 2v5M15 2v5M6 10h12v3a6 6 0 01-12 0v-3zM9 20v-2M15 20v-2",
  mic: "M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8",
  check: "M20 6L9 17l-5-5",
};

export default function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const d = paths[name] ?? paths.grid;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
