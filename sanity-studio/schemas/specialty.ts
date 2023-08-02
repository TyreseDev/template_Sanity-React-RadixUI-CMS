import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'specialty',
  title: 'Specialty',
  type: 'document',
  fields: [
    defineField({
      name: 'specialty',
      title: 'Specialty',
      type: 'string',
    }),
  ],
})
