import { ZodObject, ZodRawShape } from "zod";

export const createFormikSchemaFromFields = <T extends ZodRawShape>(
  OriginalSchema: ZodObject<T>,
  fields: Array<Partial<keyof T>>
) =>
  OriginalSchema.pick(
    fields.reduce((acc, curr) => {
      acc[curr] = true;
      return acc;
    }, {} as Record<keyof T, true>)
  );
