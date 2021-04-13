import { HiOutlineShare as icon } from 'react-icons/hi';

export default {
  title: 'Social Link',
  name: 'socialLink',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Social Network',
      name: 'socialNetwork',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter'],
        direction: 'horizontal',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Link',
      name: 'link',
      type: 'string',
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: false,
          scheme: ['https', 'http', 'mailto'],
        }),
    },
  ],
  preview: {
    select: {
      socialNetwork: 'socialNetwork',
    },
    prepare({ socialNetwork }) {
      const title = socialNetwork;
      return {
        title,
      };
    },
  },
};
