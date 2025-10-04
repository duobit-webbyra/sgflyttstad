import { revalidateTag } from 'next/cache';
import { GlobalConfig } from 'payload';

export const Contact: GlobalConfig = {
  slug: 'contact',
  fields: [
    {
      name: 'address',
      type: 'group',
      fields: [
        {
          name: 'street',
          type: 'text',
          required: true,
        },
        {
          name: 'city',
          type: 'text',
          required: true,
        },
        {
          name: 'zipcode',
          type: 'number',
          required: true,
        },
      ],
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'links',
      type: 'group',
      fields: [
        {
          name: 'facebook',
          type: 'text',
        },
        {
          name: 'instagram',
          type: 'text',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      ({ doc, req: { payload } }) => {
        payload.logger.info(`Revalidating contact information`);
        revalidateTag('global_contact');
        return doc;
      },
    ],
  },
};
