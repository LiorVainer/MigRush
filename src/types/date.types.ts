import { z } from "zod";

export const zodDate = z.preprocess((arg) => {
  if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
}, z.date());

export const optionalZodDate = z.preprocess((arg) => {
  if (!arg) return undefined;
  if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
}, z.date().nullish());

export const phoneNumberRegex =
  // eslint-disable-next-line no-useless-escape
  /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/;
