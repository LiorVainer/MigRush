import { Event, EventSchema } from "../models/event.model";

export const newEventInitialValues: Partial<Event> = {
  title: undefined,
  description: undefined,
  type: undefined,
  participantsAmountRange: [0, 20],
  time: new Date(),
  participants: [],
  location: undefined,
  date: new Date(),
};

export const firstStepEventFieldsPickOrOmit = { title: true, type: true, description: true } as const;

export const FirstStepEventSchema = EventSchema.pick(firstStepEventFieldsPickOrOmit);
export type FirstStepValues = Zod.infer<typeof FirstStepEventSchema>;
export const SecondStepEventSchema = EventSchema.omit(firstStepEventFieldsPickOrOmit);

// export const firstStepInitialValues: Partial<Pick<Event, "title" | "type" | "description">> = {
//   title: newEventInitialValues.title,
//   type: newEventInitialValues.type,
//   description: newEventInitialValues.type,
// };

// export const secondStepInitialValues = (firstStepValues: FirstStepValues): Partial<Event> => ({
//   ...newEventInitialValues,
//   ...firstStepValues,
// });
