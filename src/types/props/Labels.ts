import { Type } from '@sinclair/typebox';
import type { Static } from '@sinclair/typebox';

const LabelsSchema = Type.Object({
	xAxis: Type.Object({
		name: Type.String({default: 'X-axis'}),
		maxValue: Type.Number({default: 0}),
		minValue: Type.Number({default: 0})
	}),
	leftYAxis: Type.Object({
		name: Type.String({default: 'Left y-axis'}),
		maxValue: Type.Number({default: 0}),
		minValue: Type.Number({default: 0})
	}),
	rightYAxis: Type.Object({
		name: Type.String({default: 'Right y-axis'}),
		maxValue: Type.Number({default: 0}),
		minValue: Type.Number({default: 0})
	}),
});

export type Labels = Static<typeof LabelsSchema>;