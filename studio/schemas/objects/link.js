import { FiAlertCircle } from 'react-icons/fi'

import { Button } from '../../components/block-renders'

import ConditionalFields from '../../components/conditional-field'

export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  blockEditor: {
    render: Button,
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Display Text',
    },
    {
      title: '(A) Internal Page',
      name: 'page',
      type: 'reference',
      to: [{ type: 'homePage' }, { type: 'page' }],
    },
    {
      title: '(B) External URL',
      name: 'url',
      type: 'url',
    },
    {
      name: 'featuredNote',
      type: 'note',
      options: {
        icon: FiAlertCircle,
        headline: 'Gotcha',
        message:
          'Make sure to <em>only</em> fill in either <strong>(A) Internal Page</strong> or <strong>(B) External URL</strong>',
        tone: 'caution',
      },
    },
    {
      title: 'Style as Button?',
      name: 'isButton',
      type: 'boolean',
    },
    {
      name: 'styles',
      type: 'styles',
      inputComponent: ConditionalFields,
      options: {
        condition: (_document, context) => context().isButton === true,
      },
    },
  ],
}
