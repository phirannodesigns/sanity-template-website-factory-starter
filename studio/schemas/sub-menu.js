export default {
  title: 'Sub Menu (Drop Down)',
  name: 'subMenu',
  type: 'object',
  description: 'Leave these fields blank if you do not want a drop down menu.',
  fields: [
    {
      title: 'Link name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Link to',
      name: 'link',
      type: 'url',
      description:
        "The relative page link, e.g. '/work'. Can also be an anchor link like '#categories'",
      validation: (Rule) => [
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
      ],
    },
  ],
};
