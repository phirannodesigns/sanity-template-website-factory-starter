export default {
  title: 'General Settings',
  name: 'generalSettings',
  type: 'document',
  fields: [
    {
      title: 'Live Site URL',
      description: 'The root domain or subdomain of your website.',
      name: 'siteURL',
      type: 'url',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'General Settings',
      }
    },
  },
}
