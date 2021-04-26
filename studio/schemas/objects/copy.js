import { FiFileText as icon } from 'react-icons/fi'

export default {
  title: 'Copy',
  name: 'copy',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Complex Portable Text',
      name: 'complexPortableText',
      type: 'complexPortableText',
    },
    {
      title: 'Call to Action',
      name: 'link',
      type: 'link',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Copy',
      }
    },
  },
}
