import type { SanityImage } from '@/types/sanity.interface';
export type Product = {
  currency: string;
  brand: {
    name: string;
    logo: SanityImage;
  };
  title: string;
  url: string;
  category: string;
  _id: string;
  primary_image: SanityImage;
  sizes: Array<string | number>;
  variants: Variant[];
  price: number;
  rating: number;
  gtin: string;
  reviews: number;
  gallery: SanityImage[];
};

export type Variant = {
  title: string;
  primary_image: SanityImage;
  url: string;
  variant: string;
};
