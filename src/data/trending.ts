export const trending_data: Ttrend = {
  title: 'Trending Products',
  subtitle: `The Products Everyone's Talking About`,
  products: [
    {
      title: 'Cotton Crewneck T-Shirt',
      url: 'cotton-crewneck-t-shirt',
      image_url: '/cotton-crewneck-t-shirt.jpg',
      price: 24.99,
      currency: '$',
    },
    {
      title: 'Slim-Fit Chinos',
      url: 'slim-fit-chinos',
      image_url: '/slim-fit-chinos.jpg',
      price: 39.99,
      currency: '$',
    },
    {
      title: 'Floral Print Maxi Dress',
      url: 'floral-print-maxi-dress',
      image_url: '/floral-print-maxi-dress.jpg',
      price: 59.99,
      currency: '$',
    },
    {
      title: 'Leather Tote Bag',
      url: 'leather-tote-bag',
      image_url: '/leather-tote-bag.jpg',
      price: 149.99,
      currency: '$',
    },
    {
      title: 'Running Shoes',
      url: 'running-shoes',
      image_url: '/running-shoes.jpg',
      price: 99.99,
      currency: '$',
    },
    {
      title: 'Yoga Pants',
      url: 'yoga-pants',
      image_url: '/yoga-pants.jpg',
      price: 44.99,
      currency: '$',
    },
    {
      title: 'Graphic Tee',
      url: 'graphic-tee',
      image_url: '/graphic-tee.jpg',
      price: 19.99,
      currency: '$',
    },
    {
      title: 'Denim Shorts',
      url: 'denim-shorts',
      image_url: '/denim-shorts.jpg',
      price: 29.99,
      currency: '$',
    },
  ],
};
export type TProduct = {
  title: string;
  url: string;
  image_url: string;
  price: number;
  currency: string;
};
export type Ttrend = {
  title: string;
  subtitle: string;
  products: TProduct[];
};
