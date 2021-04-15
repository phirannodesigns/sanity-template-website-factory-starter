export default {
  name: 'styles',
  type: 'object',
  fields: [
    {
      title: 'Button Style',
      name: 'style',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: '' },
          { title: 'Primary', value: 'is-primary' },
          { title: 'White', value: 'is-white' },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'Large Size',
      name: 'isLarge',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    {
      title: 'Full Width',
      name: 'isBlock',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
}
