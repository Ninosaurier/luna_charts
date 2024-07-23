import { describe, expect, it} from 'vitest';
import Header from '../../src/components/Header.svelte';
import BarChart from '../../src/charts/BarChart.svelte';
import { render } from '@testing-library/svelte';
import { mount } from 'svelte';
import type { ChartInfo } from '../../src/types/props/ChartInfo.js';
import type { Dimension } from '../../src/types/props/Dimension.js';


describe('Header component', () => {
  it('renders the BarChart component', () => {
    const result = render(BarChart);
    
		expect(result).not.toBe(null)
  });

});