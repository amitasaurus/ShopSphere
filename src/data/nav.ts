export const nav_links: Array<TNavLinks> = [
  {
    title: 'Women',
    url: '/shop/women',
  },
  {
    title: 'Men',
    url: '/shop/men',
  },
  {
    title: 'Kids',
    url: '/shop/kids',
  },
  {
    title: 'Sports',
    url: '/shop/sports',
  },
  {
    title: 'Brands',
    url: '/shop/brands',
  },
  {
    title: 'New',
    url: '/shop/new',
  },
  {
    title: 'Sale',
    url: '/shop/sale',
    highlight: true,
  },
];
export type TNavLinks = {
  title: string;
  url: string;
  highlight?: boolean;
};
