import { z } from "zod";
import { EventType } from "../constants/event.const";
import { zodDate } from "../types/date.types";
import { ParticipantSchema } from "./participant.model";

export const EventSchema = z.object({
  title: z.string(),
  participants: z.array(ParticipantSchema),
  location: z.tuple([z.number(), z.number()]),
  description: z.string().optional(),
  date: zodDate,
  time: z.string(),
  type: z.nativeEnum(EventType),
  participantsAmountRange: z.tuple([z.number(), z.number()]).optional(),
});

export type Event = z.infer<typeof EventSchema>;
