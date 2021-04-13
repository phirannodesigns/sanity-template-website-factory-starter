export default {
  title: 'Navigation Links',
  name: 'navLinks',
  type: 'document',
  fields: [
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{ type: 'navLink' }],
    },
  ],
};
