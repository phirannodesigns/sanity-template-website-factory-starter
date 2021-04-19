import { FiHome } from 'react-icons/fi'

export default {
  title: 'Home',
  name: 'homePage',
  type: 'document',
  icon: FiHome,
  fields: [
    {
      title: 'Page Modules',
      name: 'modules',
      type: 'array',
      of: [
        { type: 'grid' },
        { type: 'hero' },
        { type: 'dividerPhoto' },
      ],
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    },
  },
}
