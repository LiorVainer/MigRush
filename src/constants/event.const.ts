import { Event } from "../models/event.model";

export enum EventFormLabels {
  date = "Date",
  time = "Time",
  description = "Description",
  location = "Location",
  participantsAmountRange = "Participants Amount Range",
  type = "Type",
  title = "Title",
}

export enum EventType {
  SOCCER = "Soccer",
  BASKETBALL = "Basketball",
}

export const EventFormPlaceHolders = {
  description: "Tell your friends what is the event is all about...",
} as const;

export const newEventValues: Partial<Event> = {
  title: undefined,
  description: undefined,
  type: undefined,
  participantsAmountRange: [0, 20],
  time: "",
  participants: [],
  location: [1, 1],
  date: new Date(),
};
