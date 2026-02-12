// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Legend of the Rood',
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'The Play (Ordinalia)',
          // This automatically finds every .mdx file in your scenes folder
          autogenerate: { directory: 'scenes' },
        },
        {
          label: 'Reference',
          items: [
            { label: 'Characters', link: '/reference/characters/' },
            { label: 'Glossary', link: '/reference/glossary/' },
          ],
        },
      ],
    }),
  ],
});