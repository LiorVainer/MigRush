export enum StatusEnum {
  ARRIVING = "Arriving",
  MAYBE = "Maybe",
  NOT_DECIDED = "Not Decided",
}

type keys = keyof typeof StatusEnum;
export type Status = typeof StatusEnum[keys];
