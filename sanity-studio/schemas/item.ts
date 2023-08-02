import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'item',
  title: 'Item',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Key',
      type: 'number',
    }),
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'specialties',
      title: 'specialties',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'specialty'}})],
    }),
    defineField({
      name: 'rate',
      title: 'Day rate',
      type: 'number',
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'boolean',
    }),
  ],
})
