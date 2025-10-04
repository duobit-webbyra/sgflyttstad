import type { Block } from 'payload';

import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  UnderlineFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

export const RichTextBlock: Block = {
  slug: 'RichText',
  interfaceName: 'RichTextBlock',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            UnderlineFeature(),
            BoldFeature(),
            ItalicFeature(),
            LinkFeature({
              fields: ({ defaultFields }) => {
                const defaultFieldsWithoutUrl = defaultFields.filter(
                  (field) => {
                    if ('name' in field && field.name === 'url') return false;
                    return true;
                  }
                );

                return [
                  ...defaultFieldsWithoutUrl,
                  {
                    name: 'url',
                    type: 'text',
                    admin: {
                      condition: ({ linkType }) => linkType !== 'internal',
                    },
                    label: ({ t }) => t('fields:enterURL'),
                    required: true,
                  },
                ];
              },
            }),
          ];
        },
      }),
    },
  ],
};
