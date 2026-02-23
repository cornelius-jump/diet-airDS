import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'player',
  title: 'Player',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Player Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
    }),
    defineField({
      name: 'team',
      title: 'Team',
      type: 'reference',
      to: [{type: 'team'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sport',
      title: 'Sport',
      type: 'string',
      options: {
        list: [
          {title: 'NBA', value: 'NBA'},
          {title: 'WNBA', value: 'WNBA'},
          {title: 'NWSL', value: 'NWSL'},
          {title: 'MLS', value: 'MLS'},
          {title: 'NCAA', value: 'NCAA'},
          {title: 'MLB', value: 'MLB'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'number',
      title: 'Jersey Number',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      number: 'number',
      position: 'position',
      team: 'team.name',
      headshot: 'headshot',
    },
    prepare({name, number, position, team, headshot}) {
      return {
        title: `${name} ${number ? `#${number}` : ''}`,
        subtitle: `${position || ''} ${team ? `- ${team}` : ''}`.trim(),
        media: headshot,
      }
    },
  },
})
