import { defineField, defineType } from 'sanity';

const currencies = [
  { title: 'US Dollar', value: '$' },
  { title: 'Euro', value: '€' },
  { title: 'British Pound Sterling', value: '£' },
  { title: 'Japanese Yen', value: '¥' },
  { title: 'Swiss Franc', value: 'CHF' },
  { title: 'Canadian Dollar', value: 'CA$' },
  { title: 'Australian Dollar', value: 'AU$' },
  { title: 'Chinese Yuan', value: 'CN¥' },
  { title: 'Indian Rupee', value: '₹' },
  { title: 'Brazilian Real', value: 'R$' },
];

const sizes = [
  { value: 'xs', title: 'Extra Small' },
  { value: 's', title: 'Small' },
  { value: 'm', title: 'Medium' },
  { value: 'l', title: 'Large' },
  { value: 'xl', title: 'Extra Large' },
  { value: 'xxl', title: 'Double Extra Large' },
];

export const product = defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'gtin',
      title: 'GTIN',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: {
        type: 'brand',
      },
    }),
    defineField({
      name: 'url',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {
        type: 'category',
      },
    }),
    defineField({
      name: 'primary_image',
      title: 'Primary Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      options: {
        list: currencies,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: sizes,
      },
    }),
    defineField({
      name: 'rating',
      title: 'Ratings',
      type: 'number',
      options: {
        list: [
          { value: 5, title: '⭐️⭐️⭐️⭐️⭐️' },
          { value: 4, title: '⭐️⭐️⭐️⭐️' },
          { value: 3, title: '⭐️⭐️⭐️' },
          { value: 2, title: '⭐️⭐️' },
          { value: 1, title: '⭐️' },
        ],
      },
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'number',
    }),
  ],
});
