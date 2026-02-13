// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Legend of the Rood',
      // Updated Social Syntax for v0.33.0+
      social: [
        { 
          label: 'GitHub', 
          link: 'https://github.com/your-username/legend-of-the-rood',
          icon: 'github' 
        }
      ],
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