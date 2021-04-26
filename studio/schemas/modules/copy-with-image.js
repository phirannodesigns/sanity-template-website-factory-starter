import { FiColumns as icon } from 'react-icons/fi'

export default {
  title: 'Copy with Image',
  name: 'copyWithImage',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Modules',
      name: 'modules',
      type: 'array',
      of: [{ type: 'figure' }, { type: 'copy' }],
      validation: (Rule) => Rule.required().min(2).max(2),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Copy with Image',
      }
    },
  },
}
