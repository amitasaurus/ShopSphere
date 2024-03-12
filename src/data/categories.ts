export const category_data: Tcategory = {
  title: 'Discover Your Look',
  subtitle:
    'Elevate your style with our newest collection of athleisure, casual, and office wear.',
  categories: [
    {
      title: 'Women',
      url: '/shop/women',
      image_url: '/category-women.jpg',
    },
    {
      title: 'Men',
      url: '/shop/men',
      image_url: '/category-men.jpg',
    },
    {
      title: 'Kids',
      url: '/shop/kids',
      image_url: '/category-kids.jpg',
    },
    {
      title: 'Sports',
      url: '/shop/sports',
      image_url: '/category-sports.jpg',
    },
  ],
};
export type Tcategories = {
  title: string;
  url: string;
  image_url: string;
};
export type Tcategory = {
  title: string;
  subtitle: string;
  categories: Tcategories[];
};
