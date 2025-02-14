import { z } from 'zod';

export const anySchema = z.object({
  name: z.string(),
});