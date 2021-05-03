import { FiCheckSquare as icon } from 'react-icons/fi'

export default {
  title: 'Service',
  name: 'service',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'link',
      type: 'link',
    },
    {
      title: 'Image',
      name: 'figure',
      type: 'figure',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'link.title',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
}
