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