export default {
  name: 'metadata',
  type: 'document',
  title: 'Metadata',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      rows: '3',
      title: 'Description',
      description: 'Describe your website for search engines and social media.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Default Social Sharing Image',
      name: 'seoImage',
      type: 'figure',
      description:
        'The default sharing image for places like Twitter and Facebook when sharing a link to your website. Please use 1200 × 628.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'siteUrl',
      type: 'url',
      title: 'Site URL',
      description:
        'The root url of your website, e.g. https://www.phirannodesigns.com.au',
      validation: (Rule) => Rule.required(),
    },
  ],
};
