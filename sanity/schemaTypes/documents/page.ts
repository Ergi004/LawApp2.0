import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'modules',
      type: 'array',
      of: [
        // {type: 'blog-rollup'},
        // {type: 'cities-slider'},
        // {type: 'creative-module'},
        // {type: 'custom-html'},
        // {type: 'faq-list'},
        // {type: 'filters'},
        {type: 'hero'},
        // {type: 'hero.saas'},
        // {type: 'hero.split'},
        // {type: 'logo-list'},
        // {type: 'richtext-module'},
        // {type: 'stat-list'},
        // {type: 'step-list'},
        // {type: 'testimonial-list'},
        // {type: 'divider'},
      ],
    }),
    defineField({
      name: 'metadata',
      type: 'metadata',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'metadata.slug.current',
      media: 'metadata.image',
    },
    prepare: ({title, slug}) => ({
      title,
      subtitle: slug && (slug === 'index' ? '/' : `/${slug}`),
    }),
  },
})
