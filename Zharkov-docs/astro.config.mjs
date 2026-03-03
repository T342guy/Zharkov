// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian'


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeObsidian()],
			title: 'Zharkov',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/T342guy/Zharkov' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
