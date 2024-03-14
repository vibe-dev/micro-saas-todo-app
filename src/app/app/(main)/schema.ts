import { z } from 'zod'

export const upsertTodoSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  doneAt: z.string().optional().nullable(),
})

export const deleteTodoSchema = z.object({
  id: z.string(),
})
