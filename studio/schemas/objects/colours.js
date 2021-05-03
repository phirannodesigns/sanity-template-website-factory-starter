export default {
  title: 'Colours',
  name: 'colours',
  type: 'string',
  options: {
    list: [
      { title: 'Primary', value: 'primary' },
      { title: 'Accent', value: 'accent' },
      { title: 'Inverted', value: 'inverted' },
    ],
    layout: 'radio',
  },
  validation: (Rule) => Rule.required(),
}
