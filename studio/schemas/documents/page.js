import { FiLayout as icon } from 'react-icons/fi'

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      description: '(required)',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Page Modules',
      name: 'modules',
      type: 'modules',
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title = 'Untitled', slug = {} }) {
      const path = `/${slug.current}`
      return {
        title,
        subtitle: slug.current ? path : '(missing slug)',
      }
    },
  },
}
