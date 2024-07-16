import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite'
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), svelteTesting()],
	test: {
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		environment: "jsdom",
		alias: {
      '@testing-library/svelte': '@testing-library/svelte/svelte5',
    },
	}
});

