import { FieldHook } from 'payload';
import { formatSlug } from '../utils/format-slug';

export const validateSlug =
  (fallback = 'title'): FieldHook =>
  ({ data, operation, value }): string => {
    if (typeof value === 'string') {
      return formatSlug(value);
    }

    if (operation === 'create' || !data?.slug) {
      const fallbackData: string = data?.[fallback] as string;

      if (fallbackData && typeof fallbackData === 'string') {
        return formatSlug(fallbackData);
      }
    }

    return value as string;
  };
