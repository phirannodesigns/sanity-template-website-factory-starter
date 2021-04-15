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
