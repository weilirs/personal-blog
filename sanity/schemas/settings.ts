import { defineField, defineType } from 'sanity'

import { FilterHorizontalIcon } from '~/assets'

export default defineType({
  name: 'settings',
  title: 'Website Settings',
  type: 'document',
  icon: FilterHorizontalIcon,
  fields: [
    defineField({
      name: 'projects',
      title: 'Project Showcase List',
      description: 'The project list displayed on the `/projects` page.',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }],
    }),

    defineField({
      name: 'heroPhotos',
      title: 'Homepage Image',
      description:
        'Several pictures at the top of the homepage (recommended to set 6).',
      type: 'array',
      of: [{ type: 'image' }],
    }),

    defineField({
      name: 'resume',
      title: 'Resume Information',
      description:
        'The resume information displayed in the sidebar of the homepage (leave blank if not displayed).',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'company',
              title: 'Company Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Job Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'logo',
              title: 'Company Logo',
              description: 'Suggested size 100x100px square crop.',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'start',
              title: 'Start Time',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'end',
              title: 'End time (leave blank to display "present")',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              company: 'company',
              title: 'title',
              logo: 'logo',
              start: 'start',
              end: 'end',
            },
            prepare: (selection) => ({
              title: `${selection.company} - ${selection.title}`,
              subtitle: `${selection.start} - ${selection.end ?? 'Present'}`,
              media: selection.logo,
            }),
          },
        },
      ],
    }),
  ],

  preview: {
    select: {},
    prepare: () => ({
      title: 'Website Settings',
    }),
  },
})
