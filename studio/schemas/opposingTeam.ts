import {defineType, defineField} from 'sanity'
import {OpposingTeamTable} from '../components/OpposingTeamTable'

export default defineType({
  name: 'opposingTeam',
  title: 'Opposing Team',
  type: 'document',
  components: {
    input: OpposingTeamTable,
  },
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'teamId',
      title: 'Team ID',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'shortName',
      title: 'Short Name',
      type: 'string',
      description: 'Nickname or abbreviated name (e.g. "Lakers", "Sounders")',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'league',
      title: 'League',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'NBA', value: 'NBA'},
          {title: 'WNBA', value: 'WNBA'},
          {title: 'MLS', value: 'MLS'},
          {title: 'NWSL', value: 'NWSL'},
          {title: 'USL Championship', value: 'USL'},
          {title: 'NCAA', value: 'NCAA'},
          {title: 'International', value: 'International'},
        ],
      },
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'string',
      description: 'Hex color code (e.g. #552583)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'league',
      media: 'logo',
    },
  },
  orderings: [
    {
      title: 'League, then Name',
      name: 'leagueThenName',
      by: [
        {field: 'league', direction: 'asc'},
        {field: 'name', direction: 'asc'},
      ],
    },
  ],
})
