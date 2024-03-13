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
