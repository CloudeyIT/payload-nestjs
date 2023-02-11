import { CollectionConfig } from 'payload/types'
import SlugField from '../fields/slug.field'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
      validate: async (value: string, { payload, id }) => {
        if (!payload) return true

        const conflicts = await payload.find<'pages'>({
          collection: 'pages',
          where: { slug: { equals: value }, and: [{ id: { not_equals: id } }] },
        })

        if (conflicts.docs.length > 0) {
          return `This slug is already in use by page "${conflicts.docs[0].title}"`
        }

        return true
      },
      admin: {
        components: {
          Field: SlugField,
        },
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
    },
    {
      name: 'childPages',
      type: 'relationship',
      relationTo: 'pages',
      label: 'Child Pages',
      hasMany: true,
    },
  ],
}