import { describe, expect, it } from 'vitest';
import Wrapper from '../../src/components/Wrapper.svelte';
import { render } from '@testing-library/svelte';
import type { Dimension } from '../../src/types/props/Dimension.js';

describe('Wrapper component should rendered', () => {
	it('renders the Wrapper with default value', () => {
		const result = render(Wrapper);

		expect(result).not.toBe(null);
	});
});

describe('Wrapper component should handle props', () => {
	it('renders the Wrapper with default value', () => {
		const result = render(Wrapper).baseElement.querySelector('svg');

		expect(result?.getAttribute('viewBox')).toBe('0 0 300 150');
	});

	it('renders the Wrapper with passed props', () => {
		const testDimension: Dimension = {
			viewBox: {
				minX: 0,
				minY: 0,
				width: 500,
				height: 600
			}
		};

		const result = render(Wrapper, {dimension: testDimension}).baseElement.querySelector('svg');

		expect(result?.getAttribute('viewBox')).toBe('0 0 500 600');
	});
});
