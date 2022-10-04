import { z } from "zod";
import { Status, StatusEnum } from "./status.model";

export const ParticipantSchema = z.object({
  name: z.string(),
  status: z.nativeEnum(StatusEnum),
  img: z.string().optional(),
});

export type Participant = z.infer<typeof ParticipantSchema>;
