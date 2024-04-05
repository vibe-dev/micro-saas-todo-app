import { z } from 'zod'

export const themeFormSchema = z.object({
  theme: z.string(),
})
