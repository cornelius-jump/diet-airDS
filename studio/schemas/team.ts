import {defineType, defineField} from 'sanity'
import {TeamTokensTable} from '../components/TeamTokensTable'

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  components: {
    input: TeamTokensTable,
  },
  groups: [
    {name: 'identity', title: 'Identity'},
    {name: 'venue', title: 'Venue'},
    {name: 'logos', title: 'Logos'},
    {name: 'brand', title: 'Brand'},
    {name: 'vfsPricing', title: 'VFS & Pricing'},
  ],
  fields: [
    // Identity group
    defineField({
      name: 'name',
      title: 'Team Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'identity',
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
      group: 'identity',
    }),
    defineField({
      name: 'shortName',
      title: 'Short Name',
      type: 'string',
      group: 'identity',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      group: 'identity',
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
      group: 'identity',
    }),

    // Venue group
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'object',
      group: 'venue',
      fields: [
        {name: 'name', title: 'Venue Name', type: 'string'},
        {name: 'city', title: 'City', type: 'string'},
      ],
    }),

    // Logos group
    defineField({
      name: 'logoPrimary',
      title: 'Primary Logo',
      type: 'image',
      group: 'logos',
    }),
    defineField({
      name: 'logoIcon',
      title: 'Logo Icon',
      type: 'image',
      group: 'logos',
    }),

    // Brand group - all brand tokens in one table
    defineField({
      name: 'brandColors',
      title: 'Brand Colors',
      type: 'object',
      group: 'brand',
      description: 'All brand design tokens',
      fields: [
        // Core tokens
        {name: 'core', type: 'string', title: 'Core'},
        {name: 'light', type: 'string', title: 'Light'},
        {name: 'dark', type: 'string', title: 'Dark'},
        {name: 'interactive', type: 'string', title: 'Interactive'},
        {name: 'inverted', type: 'string', title: 'Inverted'},

        // Light mode tokens
        {name: 'lightBase', type: 'string', title: 'Light Base'},
        {name: 'lightSurface', type: 'string', title: 'Light Surface'},
        {name: 'lightSheet', type: 'string', title: 'Light Sheet'},
        {name: 'lightNav', type: 'string', title: 'Light Nav'},

        // Dark mode tokens
        {name: 'darkBase', type: 'string', title: 'Dark Base'},
        {name: 'darkSurface', type: 'string', title: 'Dark Surface'},
        {name: 'darkSheet', type: 'string', title: 'Dark Sheet'},
        {name: 'darkNav', type: 'string', title: 'Dark Nav'},

        // Light interactive tokens
        {name: 'lightInteractivePrimary', type: 'string', title: 'Light Interactive Primary'},
        {name: 'lightInteractivePrimaryText', type: 'string', title: 'Light Interactive Primary Text'},
        {name: 'lightInteractiveSecondaryText', type: 'string', title: 'Light Interactive Secondary Text'},
        {name: 'lightInteractiveTertiaryText', type: 'string', title: 'Light Interactive Tertiary Text'},
        {name: 'lightInteractiveTransactional', type: 'string', title: 'Light Interactive Transactional'},
        {name: 'lightInteractiveTransactionalText', type: 'string', title: 'Light Interactive Transactional Text'},

        // Dark interactive tokens
        {name: 'darkInteractivePrimary', type: 'string', title: 'Dark Interactive Primary'},
        {name: 'darkInteractivePrimaryText', type: 'string', title: 'Dark Interactive Primary Text'},
        {name: 'darkInteractiveSecondaryText', type: 'string', title: 'Dark Interactive Secondary Text'},
        {name: 'darkInteractiveTertiaryText', type: 'string', title: 'Dark Interactive Tertiary Text'},
        {name: 'darkInteractiveTransactional', type: 'string', title: 'Dark Interactive Transactional'},
        {name: 'darkInteractiveTransactionalText', type: 'string', title: 'Dark Interactive Transactional Text'},

        // Other brand tokens
        {name: 'buttonRadius', type: 'string', title: 'Button Radius', initialValue: '8px'},
        {name: 'displayFont', type: 'string', title: 'Display Font', initialValue: 'Inter'},
        {
          name: 'displayWeight',
          type: 'string',
          title: 'Display Font Weight',
          description: 'CSS font-weight for display text. Must match a weight declared in fonts.css (e.g. 400, 700, 800, 900).',
          initialValue: '700',
        },
        {
          name: 'displayLetterSpacing',
          type: 'string',
          title: 'Display Letter Spacing',
          description: 'CSS letter-spacing for display text. Use em units (e.g. -0.02em, -0.01em, 0em).',
          initialValue: '-0.02em',
        },

        // Display font sizes
        {name: 'displaySize900', type: 'string', title: 'Display Size 900', initialValue: '76px'},
        {name: 'displaySize800', type: 'string', title: 'Display Size 800', initialValue: '68px'},
        {name: 'displaySize700', type: 'string', title: 'Display Size 700', initialValue: '60px'},
        {name: 'displaySize600', type: 'string', title: 'Display Size 600', initialValue: '52px'},
        {name: 'displaySize500', type: 'string', title: 'Display Size 500', initialValue: '44px'},
        {name: 'displaySize400', type: 'string', title: 'Display Size 400', initialValue: '36px'},
        {name: 'displaySize300', type: 'string', title: 'Display Size 300', initialValue: '28px'},
        {name: 'displaySize200', type: 'string', title: 'Display Size 200', initialValue: '24px'},
        {name: 'displaySize100', type: 'string', title: 'Display Size 100', initialValue: '20px'},
      ],
    }),

    // VFS & Pricing group
    defineField({
      name: 'vfsFar',
      title: 'VFS Far',
      type: 'object',
      group: 'vfsPricing',
      fields: [
        {
          name: 'image1',
          title: 'Image 1',
          type: 'image',
          options: {hotspot: true},
        },
        {
          name: 'image2',
          title: 'Image 2',
          type: 'image',
          options: {hotspot: true},
        },
        {
          name: 'image3',
          title: 'Image 3',
          type: 'image',
          options: {hotspot: true},
        },
        {
          name: 'fallback',
          title: 'Fallback Image',
          type: 'image',
          options: {hotspot: true},
        },
        {name: 'price1', title: 'Price 1', type: 'string'},
        {name: 'price2', title: 'Price 2', type: 'string'},
        {name: 'price3', title: 'Price 3', type: 'string'},
        {
          name: 'priceLabel',
          title: 'Price Label',
          type: 'string',
          initialValue: 'Avg. Price',
        },
      ],
    }),
    defineField({
      name: 'vfsClose',
      title: 'VFS Close',
      type: 'object',
      group: 'vfsPricing',
      fields: [
        {
          name: 'image1',
          title: 'Image 1',
          type: 'image',
          options: {hotspot: true},
        },
        {
          name: 'image2',
          title: 'Image 2',
          type: 'image',
          options: {hotspot: true},
        },
        {
          name: 'image3',
          title: 'Image 3',
          type: 'image',
          options: {hotspot: true},
        },
        {
          name: 'fallback',
          title: 'Fallback Image',
          type: 'image',
          options: {hotspot: true},
        },
        {name: 'price1', title: 'Price 1', type: 'string'},
        {name: 'price2', title: 'Price 2', type: 'string'},
        {name: 'price3', title: 'Price 3', type: 'string'},
        {
          name: 'priceLabel',
          title: 'Price Label',
          type: 'string',
          initialValue: 'Avg. Price',
        },
      ],
    }),

  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'teamId.current',
      media: 'logoPrimary',
    },
  },
})
