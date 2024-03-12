export const nav_links: Array<TNavLinks> = [
  {
    title: 'Women',
    url: 'women',
  },
  {
    title: 'Men',
    url: 'men',
  },
  {
    title: 'Kids',
    url: 'kids',
  },
  {
    title: 'Sports',
    url: 'sports',
  },
  {
    title: 'Brands',
    url: 'brands',
  },
  {
    title: 'New',
    url: 'new',
  },
  {
    title: 'Sale',
    url: 'sale',
    highlight: true,
  },
];
export type TNavLinks = {
  title: string;
  url: string;
  highlight?: boolean;
};
