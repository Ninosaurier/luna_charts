import { Type } from '@sinclair/typebox';
import type { Static } from '@sinclair/typebox';

const ChartInfoSchema = Type.Object({
  title: Type.String(),
  desc: Type.String(),
  source: Type.String(),
});

export type ChartInfo = Static<typeof ChartInfoSchema>;