export interface StepNavMetadata {
  do: () => void;
  show: boolean;
}

export interface StepsNavMetadata {
  prev: StepNavMetadata;
  next: StepNavMetadata;
  done: StepNavMetadata;
}
