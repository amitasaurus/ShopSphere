export const product_data: TProduct = {
  id: 'HR1325R00--8',
  category: `Men's`,
  title: 'Cotton Crewneck T-Shirt',
  url: 'cotton-crewneck-t-shirt',
  image_url: '/cotton-crewneck-t-shirt.jpg',
  price: 24.99,
  currency: '$',
  gallery: [
    '/cotton-crewneck-t-shirt.jpg',
    '/t-shirt/display-1.jpg',
    '/t-shirt/display-2.jpg',
    '/t-shirt/display-3.jpg',
    '/t-shirt/display-4.jpg',
  ],
  brand: {
    name: 'H&M',
    logo: '/brand/h-and-m.png',
  },
  rating: 4,
  reviews: 120,
  variants: {
    title: 'Color',
    types: [
      {
        name: 'Red',
        image: '/t-shirt/variants/red-t-shirt.jpg',
      },
      {
        name: 'Green',
        image: '/t-shirt/variants/green-t-shirt.jpg',
      },
      {
        name: 'Grey',
        image: '/t-shirt/variants/grey-t-shirt.jpg',
      },
      {
        name: 'Purple',
        image: '/t-shirt/variants/purple-t-shirt.jpg',
      },
      {
        name: 'Teal',
        image: '/t-shirt/variants/teal-t-shirt.jpg',
      },
    ],
  },
};
export type TProduct = {
  id: string;
  title: string;
  url: string;
  image_url: string;
  price: number;
  currency: string;
  category: string;
  gallery: string[];
  brand: {
    name: string;
    logo: string;
  };
  rating: number;
  reviews: number;
  variants: {
    title: string;
    types: Array<{
      name: string;
      image: string;
    }>;
  };
};
