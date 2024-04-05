import { z } from 'zod'

export const updateProfileSchema = z.object({
  name: z.string(),
  email: z.string(),
})
