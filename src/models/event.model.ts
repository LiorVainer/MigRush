import { Participant } from "./participant.model";

export interface Event {
  name: string;
  participants: Participant[];
  location: string;
  description?: string;
  date: Date;
  type: string;
  participantsAmountRange?: [number, number];
}
