import { Type } from '@sinclair/typebox';
import type { Static } from '@sinclair/typebox';

const SpaceSchema = Type.Object({
		left: Type.Number(),
		right: Type.Number(),
		top: Type.Number(),
		bottom: Type.Number()
});

export type Space = Static<typeof SpaceSchema>;