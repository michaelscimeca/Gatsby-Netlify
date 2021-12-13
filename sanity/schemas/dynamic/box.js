export default {
  name: "box",
  type: "object",
  title: "Box",
  fields: [
    {
      name: 'layout',
      title: 'Box Layout',
      type: 'boxLayout',
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      hidden: ({parent, value, layout}) => parent.layout === 'standard' || parent.layout === 'hightlight'
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'blockContent'
    },
  ]
}
