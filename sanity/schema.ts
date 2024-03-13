import { type SchemaTypeDefinition } from 'sanity';
import { banner } from './schemas/banner';
import { category, homeCategory } from './schemas/category';
import { product } from './schemas/product';
import { brand } from './schemas/brand';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, category, homeCategory, product, brand],
};
