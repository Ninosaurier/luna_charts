import { describe, expect, it } from 'vitest';
import RootChart from './Wrapper.svelte';
import { mount } from 'svelte';


// Cannot be tested, because Svelte 5 is experimental
// describe('Create a simple RootChart', () => {
// 	let instance = null;
// 	const host = document.createElement('div');
// 	document.body.append(host);
// 	instance = mount(RootChart, { target: host });

// 	it('Creates a simple RootChart in the document', () => {
// 		expect(instance).toBeTruthy();
// 	});
// });
