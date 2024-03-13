import client from '../../client';
import type { SanityImage } from '@/types/sanity.interface';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}
