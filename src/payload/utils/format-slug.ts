export const formatSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/ä/g, 'a') // Replace 'ä' with 'a'
    .replace(/ö/g, 'o') // Replace 'ö' with 'o'
    .replace(/å/g, 'a') // Replace 'å' with 'a'
    .replace(/[^\w\s-]/g, '') // Remove all non-word characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
};
