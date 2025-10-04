import type { GlobalConfig } from 'payload';

export const Contact: GlobalConfig = {
  slug: 'contact',
  label: {
    sv: 'Kontakt',
    en: 'Contact',
  },
  fields: [
    {
      name: 'location',
      label: {
        sv: 'Plats',
        en: 'Location',
      },
      type: 'group',
      fields: [
        {
          name: 'address',
          type: 'text',
        },
        {
          name: 'zipcode',
          type: 'number',
        },
        {
          name: 'city',
          type: 'text',
        },
        {
          name: 'state',
          type: 'text',
        },
      ],
    },
    {
      name: 'number',
      type: 'number',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'socials',
      label: {
        sv: 'Sociala Medier',
        en: 'Social Medias',
      },
      type: 'group',
      fields: [
        {
          name: 'facebook',
          label: 'Facebook',
          type: 'text',
        },
        {
          name: 'instagram',
          label: 'Instagram',
          type: 'text',
        },
        {
          name: 'linkedin',
          label: 'LinkedIn',
          type: 'text',
        },
        {
          name: 'tiktok',
          label: 'TikTok',
          type: 'text',
        },
        {
          name: 'x',
          label: 'X (Twitter)',
          type: 'text',
        },
        {
          name: 'snapchat',
          label: 'Snapchat',
          type: 'text',
        },
      ],
    },
  ],
};
