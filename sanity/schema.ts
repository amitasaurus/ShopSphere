import { type SchemaTypeDefinition } from 'sanity';
import { banner } from './schemas/banner';
import { category, homeCategory } from './schemas/category';
import { product } from './schemas/product';
import { brand } from './schemas/brand';
import { trending } from './schemas/trending';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, category, homeCategory, product, brand, trending],
};
