import { Participant } from "./participant.model";

export interface Event {
  title: string;
  participants: Participant[];
  location: string;
  description?: string;
  date: Date;
  time: string;
  type: string;
  participantsAmountRange?: [number, number];
}
