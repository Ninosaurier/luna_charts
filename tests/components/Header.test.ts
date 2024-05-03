import { describe, expect, it} from 'vitest';
import Header from '../../src/components/Header.svelte';
import { render } from '@testing-library/svelte';


describe('Header component', () => {
  it('renders the Header with default value', () => {
    const result = render(Header);
    
		expect(result).not.toBe(null)
  });
});