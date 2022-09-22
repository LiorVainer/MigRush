export const STATUS_OPTIONS = {
  ARRIVING: "Arriving",
  MAYBE: "Maybe",
  NOT_DECIDED: "Not Decided",
} as const;

type keys = keyof typeof STATUS_OPTIONS;
export type Status = typeof STATUS_OPTIONS[keys];
