import { Type } from '@sinclair/typebox';
import type { Static } from '@sinclair/typebox';

const BarSchema = Type.Object({
  value: Type.Number(),
  ariaLabel: Type.String(),
});

export type Bar = Static<typeof BarSchema>;

const BarGroupSchema = Type.Object({
  name: Type.String(),
  bars: Type.Array(BarSchema),
  position: Type.Optional(Type.Number()),
  color: Type.String(),
});

export type BarGroup = Static<typeof BarGroupSchema>;

const BarSeriesSchema = Type.Object({
  series: Type.Array(BarGroupSchema),
  category: Type.Array(Type.String()),
});

export type BarSeries = Static<typeof BarSeriesSchema>;