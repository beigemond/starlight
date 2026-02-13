// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Legend of the Rood',
      // This links your custom Cornish fonts and styles
      customCss: ['./src/styles/custom.css'],
      social: {
        // Replace with your actual repo link later
        github: 'https://github.com/your-username/legend-of-the-rood',
      },
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'The Play (Ordinalia)',
          // This creates the menu from your src/content/docs/scenes/ folder
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