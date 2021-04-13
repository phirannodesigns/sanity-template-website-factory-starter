import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { HiOutlineDocumentText as icon } from 'react-icons/hi';

dayjs.extend(advancedFormat);

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Post Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Post Slug',
      description:
        "This defines the posts link on your website relative to the post path set in theme options via Gatsby. For example a slug of 'wicked-awesome' would end up at mysite.com/posts/wicked-awesome' by default.",
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'date',
      options: {
        dateFormat: 'Do MMMM, YYYY',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'category',
            },
          ],
        },
      ],
    },
    {
      name: 'body',
      title: 'Post Content',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
    },
    prepare(selection) {
      const { title, date } = selection;
      return {
        title,
        subtitle: dayjs(date).format('Do MMMM, YYYY'),
      };
    },
  },
  orderings: [
    {
      title: 'Publish Date Desc',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Publish Date Asc',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
};
