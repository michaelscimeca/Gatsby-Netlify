export default {
  name: "contentDynamic",
  type: "object",
  title: "Content Dynamic",
  fields: [
    {
      name: 'dynamicRepeater',
      title: 'Dynamic Repeater',
      type: 'array',
      of: [
        {type: 'imageText'},
        {type: 'box'},
      ]
    }
  ]
}
