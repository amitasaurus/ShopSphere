import type { SanityImage } from '@/types/sanity.interface';

export type Banner = {
  image: SanityImage;
  title: string;
  subtitle: string;
  redirectTo: string;
};
export type Categories = {
  title: string;
  url: string;
  image: SanityImage;
};
export type Category = {
  title: string;
  subtitle: string;
  categories: Categories[];
};
export type Trending = {
  title: string;
  subtitle: string;
  products: Product[];
};
export type Product = {
  title: string;
  url: string;
  primary_image: SanityImage;
  price: number;
  currency: string;
  category: string;
};
export type Combined = {
  banners: Banner[];
  categories: Category[];
  trending: Trending[];
};
