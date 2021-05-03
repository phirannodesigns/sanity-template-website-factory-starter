import { FiGrid as icon } from 'react-icons/fi'

export default {
  title: 'Services Grid',
  name: 'servicesGrid',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Services',
      name: 'services',
      type: 'array',
      of: [{ type: 'service' }],
      validation: (Rule) => Rule.required().min(2).max(6),
    },
    {
      title: 'Colours',
      name: 'colours',
      type: 'colours',
      validation: (Rule) => Rule.required()
    },
  ],
}
