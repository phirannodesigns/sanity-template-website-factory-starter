export default {
  title: 'Social Link',
  name: 'socialLinks',
  type: 'document',
  fields: [
    {
      name: 'socialLinks',
      type: 'array',
      of: [{ type: 'socialLink' }],
    },
  ],
};
