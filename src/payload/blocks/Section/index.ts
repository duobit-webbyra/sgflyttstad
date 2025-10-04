import type { Block } from 'payload';
import { HeroBlock } from '../Hero';

export const SectionBlock: Block = {
  slug: 'Section',
  interfaceName: 'SectionBlock',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'paddingY',
          type: 'number',
          admin: {
            description: 'Padding in REM (Y-Axis)',
          },
        },
        {
          name: 'paddingX',
          type: 'number',
          admin: {
            description: 'Padding in REM (X-Axis)',
          },
        },
      ],
    },
    {
      name: 'dimension',
      type: 'group',
      fields: [
        {
          name: 'custom',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'height',
          type: 'radio',
          options: [
            {
              label: 'Minimum screen',
              value: 'min-h-screen',
            },
            {
              label: 'Exact screen',
              value: 'h-screen',
            },
            {
              label: 'Max Content',
              value: 'h-max',
            },
          ],
          admin: {
            condition: (_, siblingData) => {
              if (siblingData.custom) {
                return false;
              } else {
                return true;
              }
            },
          },
        },
        {
          name: 'heightCustom',
          type: 'number',
          label: 'Height',
          admin: {
            description: 'Height in REM',
            condition: (_, siblingData) => {
              if (siblingData.custom) {
                return true;
              } else {
                return false;
              }
            },
          },
        },
      ],
    },
    {
      name: 'blocks',
      label: 'Content',
      type: 'blocks',
      blocks: [HeroBlock],
    },
  ],
};
