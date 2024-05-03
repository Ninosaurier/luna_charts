import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		environment: "jsdom",
		alias: {
      '@testing-library/svelte': '@testing-library/svelte/svelte5',
    },
	}
});

