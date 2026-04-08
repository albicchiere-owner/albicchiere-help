import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  helpSidebar: [
    {
      type: 'category',
      label: 'General',
      collapsed: false,
      items: [
        'general/what-is-it',
        'general/how-it-works',
        'general/dimensions',
        'general/wine-preservation',
        'general/internet-connection',
      ],
    },
    {
      type: 'category',
      label: 'Smart Dispenser',
      collapsed: false,
      items: [
        'smart-dispenser/first-setup',
        'smart-dispenser/smart-bag-positioning',
        'smart-dispenser/remove-cap',
        'smart-dispenser/low-quantity',
      ],
    },
    {
      type: 'category',
      label: 'App',
      collapsed: false,
      items: [
        'app/add-smart-bag',
        'app/label-scan',
        'app/search-add-wine',
        'app/pour-wine',
        'app/schedule-serving',
        'app/temperature',
        'app/vacuum-mode',
        'app/check-bag-quality',
        'app/convert-to-bag',
        'app/filling-bag',
        'app/cantina-wishlist',
        'app/parental-controls',
        'app/device-settings',
        'app/dispenser-offline',
        'app/rooms-chassis',
      ],
    },
    {
      type: 'category',
      label: 'Account',
      collapsed: false,
      items: [
        'account/login-password',
        'account/personal-data',
        'account/notifications-privacy',
        'account/switch-logout',
      ],
    },
    {
      type: 'category',
      label: 'Wine Knowledge',
      collapsed: false,
      items: [
        'wine-knowledge/wine-page',
        'wine-knowledge/wine-moods',
        'wine-knowledge/tannins-categories',
        'wine-knowledge/albi-sommelier',
      ],
    },
  ],
};

export default sidebars;
