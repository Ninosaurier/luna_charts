import { describe, expect, it} from 'vitest';
import Header from '../../src/components/Header.svelte';
import { render } from '@testing-library/svelte';
import { mount } from 'svelte';


describe('Header component', () => {
  it('renders the Header component', () => {
    const result = render(Header);
    
		expect(result).not.toBe(null)
  });

	it('renders the Header component with a aria-level 1', () => {
    const header = render(Header);
		const ariaLevel = header.baseElement.querySelector(".header-title")?.ariaLevel;
    
		expect(ariaLevel).toBe('1');
  });

	it('renders the Header component with a aria-level 2', () => {
		const div: HTMLDivElement = document.createElement("div");
		const div2: HTMLDivElement = document.createElement("div");
		const h1: HTMLHeadElement = document.createElement("h1");
		const svg: HTMLElement = document.createElement("svg");

		div.append(h1);
		div.append(div2);
		div2.append(svg);
		mount(Header, {target: svg});
    
		expect(div2.querySelector(".header-title")?.ariaLevel).toBe("2");
  });
});