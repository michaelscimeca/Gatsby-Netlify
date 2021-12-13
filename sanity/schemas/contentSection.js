export default {
  name: "contentSection",
  type: "object",
  title: "Content Section",
  fields: [
    {
      title: 'introduction',
      name: 'introduction',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ]
    },
    {
      title: 'Card Image',
      name: 'cardImage',
      type: 'image',
    },
  ]
}
