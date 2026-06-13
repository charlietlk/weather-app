import z from "zod";

export const citySchema = z
  .string()
  .trim()
  .min(2, "City name must be at least 2 characters")
  .max(50, "City name is too long")
  .regex(/^[\p{L}\s'-]+$/u, "City name can only contain letters")
  .transform((city) => city.replace(/\s+/g, " "));

export const weatherSchema = z.object({
  city: z.string(),
  country: z.string(),
  temperature: z.number(),
  feelsLike: z.number(),
  humidity: z.number(),
  pressure: z.number(),
  wind: z.number(),
  condition: z.string(),
  icon: z.string(),
});
