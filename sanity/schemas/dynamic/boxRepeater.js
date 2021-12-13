export default {
  name: "boxRepeater",
  type: "object",
  title: "Box Repeater",
  fields: [
    {
      name: 'repeater',
      title: 'Repeater',
      type: 'array',
      of: [
        {type: 'box'},
      ]
    }
  ]
}
