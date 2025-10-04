import type { TextField } from 'payload';
import { validateSlug } from '../hooks/validate-slug';

export const slugField = (fieldToUse = 'title'): TextField[] => {
  const slug: TextField = {
    name: 'slug',
    type: 'text',
    admin: {
      components: {
        Field: {
          path: '/payload/components/Slug#Slug',
          clientProps: {
            fieldToUse,
          },
        },
      },
      position: 'sidebar',
    },
    hooks: {
      beforeValidate: [validateSlug(fieldToUse)],
    },
  };

  return [slug];
};
