import { Type } from '@sinclair/typebox';
import type { Static } from '@sinclair/typebox';

const DimensionSchema = Type.Object({
	viewBox: Type.Object({
		minX: Type.Number(),
		minY: Type.Number(),
		width: Type.Number(),
		height: Type.Number()
	})
});

export type Dimension = Static<typeof DimensionSchema>;