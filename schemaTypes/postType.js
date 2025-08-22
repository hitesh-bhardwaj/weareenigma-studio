import { DocumentTextIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'author' } })],
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),

    // ✅ New Meta Image Field
    defineField({
      name: 'metaImage',
      type: 'image',
      title: 'Meta Image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Short description of the image for SEO and accessibility',
        }),
      ],
    }),

    defineField({
      name: 'metaDescription',
      type: 'string',
      title: 'Meta Description',
      description: 'SEO-friendly description for search engines and social media previews',
    }),

    defineField({
      name: 'loaderText',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
    }),
    defineField({
      name: 'excerpt',
      type: 'string',
      hidden: ({ parent }) => !parent?.featured,
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author0: 'author.0.name', // Get first author's name
      media: 'mainImage',
    },
    prepare(selection) {
      const { author0 } = selection;
      return { 
        ...selection, 
        subtitle: author0 ? `by ${author0}` : "No author" 
      };
    },
  },
});
