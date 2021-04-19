import { FiStar } from 'react-icons/fi'

import ConditionalFields from '../../components/conditional-field'

export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  icon: FiStar,
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'array',
      of: [{ type: 'headingLine' }],
    },
    {
      title: 'Call to Action',
      name: 'link',
      type: 'link',
    },
    {
      title: 'Background Type',
      name: 'bgType',
      type: 'string',
      options: {
        list: [
          { title: 'Photo', value: 'photo' },
          { title: 'Video', value: 'video' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'photos',
      type: 'backgroundImage',
      inputComponent: ConditionalFields,
      options: {
        condition: (_document, context) => context().bgType === 'photo',
      },
    },
    {
      name: 'video',
      type: 'video',
      inputComponent: ConditionalFields,
      options: {
        condition: (_document, context) => context().bgType === 'video',
      },
    },
  ],
  preview: {
    select: {
      photo: 'photo',
      content: 'content.0.children',
    },
    prepare({ photo, content }) {
      return {
        title: 'Hero',
        subtitle: content && content[0]?.text,
        media: photo,
      }
    },
  },
}
