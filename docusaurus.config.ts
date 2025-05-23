import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'NSPanel Manager',
  tagline: 'Documentation',
  favicon: 'images/favicon.ico',

  // Set the production url of your site here
  url: 'https://nspanelmanager.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL || '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NSPManager',
  projectName: 'NSPanelManager-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/NSPManager/NSPanelManager-docs/edit/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'images/nspanelmanager-social-card.jpg',
    navbar: {
      title: 'NSPanel Manager',
      logo: {
        alt: 'NSPanel Manager Logo',
        srcDark: 'images/logo-dark.svg',
        src: 'images/logo-light.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Guide',
        },
        {
          position: 'left',
          label: 'Screenshots',
          to: '/screenshots',
        },
        {
          position: 'left',
          label: 'Demo',
          to: '/demo',
        },
        {
          position: 'left',
          label: 'Support',
          to: '/support',
        },
        {
          position: 'right',
          label: 'Flash Firmware',
          href: 'https://nspanelmanager.com/flashing-tool.html', // `flashing-tool.html` returns a page not found
        },
        {
          href: 'https://github.com/NSPManager/NSPanelManager',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    mermaid: {
      theme: {
        // Customize Mermaid theme options
        light: 'default', // Mermaid theme for light mode
        dark: 'dark', // Mermaid theme for dark mode
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Quick start guide',
              to: '/docs/getting-started/pre-requisites',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/RwXvAH56fE',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/NSPManager/NSPanelManager',
            },
            {
              label: 'Branding',
              to: '/branding/logo-guidelines',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} nspanelmanager`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: 'ORQYQLTO1S',
      apiKey: '196785515dac5daeccbd1a5dce6125c2',
      indexName: 'nspanelmanager',
      contextualSearch: false,
      searchParameters: {},
      searchPagePath: 'search',
      insights: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
