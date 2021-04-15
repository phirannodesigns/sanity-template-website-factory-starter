export default {
  name: 'video',
  type: 'object',
  fields: [
    {
      title: 'Background Video',
      name: 'id',
      type: 'string',
      description:
        'Alternatively, enter a vimeo ID to show a looping video instead',
    },
    {
      title: 'Background Video Title',
      name: 'title',
      type: 'string',
      description: 'Short title/description of the video',
    },
  ],
}
