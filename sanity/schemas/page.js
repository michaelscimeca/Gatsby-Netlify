export default {
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
        .toLowerCase()
        .replace(/\s+/g, '-')
        .slice(0, 200)
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Release date',
      name: 'releaseDate',
      type: 'date'
    },
    {
      name: 'hero',
      title: 'Hero Image',
      type: 'image'
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'}
      ],
    },
    {
      name: 'dynamicSection',
      title: 'Dynamic Content Repeater',
      type: 'array',
      of: [
        {type: 'imageText'},
        {type: 'videoText'},
        {type: 'boxRepeater'},
      ]
    },
  ]
}
