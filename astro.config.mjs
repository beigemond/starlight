// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Legend of the Rood',
      // 1. If you haven't created this file yet, comment this line out with //
      // customCss: ['./src/styles/custom.css'], 
      social: {
        github: 'https://github.com/your-username/legend-of-the-rood',
      },
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