import type { Access, FieldAccess } from 'payload';

export const isAdmin: Access = ({ req }) => {
  if (!req.user || !Array.isArray(req.user.roles)) {
    return false;
  }

  return req.user.roles.includes('admin');
};

export const isAdminField: FieldAccess = ({ req }) => {
  if (!req.user || !Array.isArray(req.user.roles)) {
    return false;
  }

  return req.user.roles.includes('admin');
};

export const selfOrAdmin: Access = ({ req }) => {
  if (!req.user) {
    return false;
  }

  if (isAdmin({ req })) {
    return true;
  }

  return {
    id: { equals: req.user.id },
  };
};
