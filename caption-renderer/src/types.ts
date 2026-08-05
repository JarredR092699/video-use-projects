import {z} from 'zod';

export const WordSchema = z.object({text: z.string(), start: z.number(), end: z.number()});
export const CaptionSchema = z.object({start: z.number(), end: z.number(), words: z.array(WordSchema)});
export const RangeSchema = z.object({source: z.string(), start: z.number(), end: z.number()});
export const RenderPropsSchema = z.object({
  fps: z.number().positive().default(30),
  width: z.number().int().positive().default(1920),
  height: z.number().int().positive().default(1080),
  sources: z.record(z.string()),
  ranges: z.array(RangeSchema),
  captions: z.array(CaptionSchema),
  showCaptions: z.boolean().optional(),
});
export type RenderProps = z.infer<typeof RenderPropsSchema>;
