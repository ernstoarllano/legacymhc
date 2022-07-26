export default {
  name: 'home',
  type: 'document',
  title: 'Homes for Sale',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'parent',
      title: 'Community',
      type: 'reference',
      to: [{ type: 'community' }]
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number'
    },
    {
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number'
    }
  ]
}