import type { CollectionConfig } from 'payload';
import { isAdmin, isAdminField, selfOrAdmin } from '../access/isAdmin';

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    create: selfOrAdmin,
    read: selfOrAdmin,
    update: selfOrAdmin,
  },
  admin: {
    useAsTitle: 'email',
    group: 'Administration',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'roles',
      type: 'select',
      required: true,
      hasMany: true,
      access: {
        update: isAdminField,
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
      ],
    },
  ],
};
