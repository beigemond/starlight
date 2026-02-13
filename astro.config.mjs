// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Legend of the Rood',
      // This is the EXACT array format required by v0.33.0
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'The Play (Ordinalia)',
          autogenerate: { directory: 'scenes' },
        },
        {
          label: 'Reference',
          items: [
            { label: 'Characters', link: '/reference/characters' },
            { label: 'Glossary', link: '/reference/glossary' },
          ],
        },
      ],
    }),
  ],
});