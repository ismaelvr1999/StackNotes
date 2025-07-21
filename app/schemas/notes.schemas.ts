import * as z from "zod";

const NoteSchema = z.object({
  id: z.uuid() ,
  title: z.string(),
  content: z.string(),
  created_at: z.iso.datetime(),
  updated_at: z.iso.datetime()
});

export type NoteType = z.infer<typeof NoteSchema>;

export const CreateNoteFormSchema = z.object({
  title: z.string().optional(),
  content: z.string().min(1, "Title is required"),
});

export type CreateNoteFormData = z.infer<typeof CreateNoteFormSchema>;

