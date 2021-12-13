export default {
  name: "imageText",
  type: "object",
  title: "Image Text",
  fieldsets: [
    {name: 'image', content: 'layout for Text & Image Component'}
  ],
  fields: [
    {
      name: 'layout',
      title: 'Image Layout',
      type: 'imageLayout',
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
      fieldset: 'image'
    },
    {
      title: 'content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      fieldset: 'image'
    },
  ]
}
