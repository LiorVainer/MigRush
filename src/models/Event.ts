import { Participant } from "./Participant";

export interface Event {
  name: string;
  participants: Participant[];
  location: string;
  description?: string;
  date: Date;
  type: string;
  minParticipantsNeeded?: number;
}
