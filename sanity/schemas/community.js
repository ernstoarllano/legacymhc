const states = [
  { "title": "Alabama", "value": "AL" },
  { "title": "Alaska", "value": "AK" },
  { "title": "Arizona", "value": "AZ" },
  { "title": "Arkansas", "value": "AR" },
  { "title": "California", "value": "CA" },
  { "title": "Colorado", "value": "CO" },
  { "title": "Connecticut", "value": "CT" },
  { "title": "Delaware", "value": "DE" },
  { "title": "Florida", "value": "FL" },
  { "title": "Georgia", "value": "GA" },
  { "title": "Hawaii", "value": "HI" },
  { "title": "Idaho", "value": "ID" },
  { "title": "Illinois", "value": "IL" },
  { "title": "Indiana", "value": "IN" },
  { "title": "Iowa", "value": "IA" },
  { "title": "Kansas", "value": "KS" },
  { "title": "Kentucky", "value": "KY" },
  { "title": "Louisiana", "value": "LA" },
  { "title": "Maine", "value": "ME" },
  { "title": "Maryland", "value": "MD" },
  { "title": "Massachusetts", "value": "MA" },
  { "title": "Michigan", "value": "MI" },
  { "title": "Minnesota", "value": "MN" },
  { "title": "Mississippi", "value": "MS" },
  { "title": "Missouri", "value": "MO" },
  { "title": "Montana", "value": "MT" },
  { "title": "Nebraska", "value": "NE" },
  { "title": "Nevada", "value": "NV" },
  { "title": "New Hampshire", "value": "NH" },
  { "title": "New Jersey", "value": "NJ" },
  { "title": "New Mexico", "value": "NM" },
  { "title": "New York", "value": "NY" },
  { "title": "North Carolina", "value": "NC" },
  { "title": "North Dakota", "value": "ND" },
  { "title": "Ohio", "value": "OH" },
  { "title": "Oklahoma", "value": "OK" },
  { "title": "Oregon", "value": "OR" },
  { "title": "Pennsylvania", "value": "PA" },
  { "title": "Rhode Island", "value": "RI" },
  { "title": "South Carolina", "value": "SC" },
  { "title": "South Dakota", "value": "SD" },
  { "title": "Tennessee", "value": "TN" },
  { "title": "Texas", "value": "TX" },
  { "title": "Utah", "value": "UT" },
  { "title": "Vermont", "value": "VT" },
  { "title": "Virginia", "value": "VA" },
  { "title": "Washington", "value": "WA" },
  { "title": "West Virginia", "value": "WV" },
  { "title": "Wisconsin", "value": "WI" },
  { "title": "Wyoming", "value": "WY" }
]


export default {
  name: 'community',
  type: 'document',
  title: 'Community',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'age' }]
    },
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
      name: 'state',
      title: 'State',
      type: 'string',
      options: {
        list: [
          ...states
        ]
      }
    },
    {
      name: 'address',
      title: 'Address',
      type: 'geopoint'
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url'
    }
  ]
}