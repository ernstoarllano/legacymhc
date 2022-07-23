export default {
  name: 'community',
  type: 'document',
  title: 'Community',
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
      name: 'city',
      title: 'City',
      type: 'string'
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url'
    }
  ]
}