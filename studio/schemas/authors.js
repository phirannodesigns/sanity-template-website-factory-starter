export default {
  name: 'authors',
  type: 'document',
  fields: [
    {
      name: 'authors',
      type: 'array',
      of: [{ type: 'author' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
