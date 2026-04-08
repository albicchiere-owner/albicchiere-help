import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Albicchiere Help Center',
  tagline: 'Everything you need to get the most from your Albi',
  favicon: 'img/favicon.ico',
  url: 'https://albicchiere-owner.github.io',
  baseUrl: '/albicchiere-help/',
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    localeConfigs: {
      en: { label: 'English', direction: 'ltr' },
      it: { label: 'Italiano', direction: 'ltr' },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Help Center',
      logo: {
        alt: 'Albicchiere',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { label: 'albicchiere.com', href: 'https://www.albicchiere.com' },
        { label: 'Contact Support', href: 'mailto:support@albicchiere.com' },
      ],
      copyright: `© ${new Date().getFullYear()} Albicchiere / Beexlab S.r.l.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
