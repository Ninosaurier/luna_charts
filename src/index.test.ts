import { describe, it, expect } from 'vitest';

describe('Quick math does not work! (EasterEgg)', () => {
	it('adds 2 + 2 not to equal 3', () => {
		expect(2 + 2).not.toEqual(3);
	});
});
