import { describe, expect, it} from 'vitest';
import Wrapper from '../../src/core/Wrapper.svelte';
import { render } from '@testing-library/svelte';

// Cannot be tested, because Svelte 5 is experimental
// describe('Create a simple Wrapper', () => {
// 	it('Creates a simple Wrapper in the document', () => {
// 		const results = render(Wrapper, { props: {} });
// 	});
// });

describe('Wrapper component', () => {
  it('renders the Wrapper with default value', () => {
    const result = render(Wrapper);
    
		expect(result).not.toBe(null)
  });
});
