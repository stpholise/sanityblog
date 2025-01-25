import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'facebook',
      title: 'facebook',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      title: 'twitter',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'instagram',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'linkedin',
      type: 'url',
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
