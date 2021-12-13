export default {
  name: "videoText",
  type: "object",
  title: "Video Text",
  fieldsets: [
    {name: 'video', content: 'Social media handles'}
  ],
  fields: [
    {
      name: 'layout',
      title: 'Video Layout',
      type: 'videoLayout',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'video',
      fieldset: 'video'
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
      fieldset: 'video'
    },
  ]
}
