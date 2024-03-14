import Image from 'next/image';
import ProductGallery from '../components/ProductGallery';
import { FiStar, FiShoppingCart, FiHeart, FiTruck } from 'react-icons/fi';
import Breadcrumbs from '../components/Breadcrumbs';
import Variants from '../components/Variants';
import Sizes from '../components/Sizes';
import Button, { EAlignment, EVariants } from '../components/Button';
import client from '../../../client';
import { getProductQuery } from '@/queries/product';
import { urlFor } from '@/utils/sanity';
import type { Product } from '@/types/product';
export default async function Page({
  params,
}: {
  params: { product: string };
}) {
  const data = await client.fetch<Product[]>(getProductQuery(params.product));
  const product_data = data[0];
  return (
    <div className="grid w-full min-h-screen grid-cols-12 p-4">
      <div className="col-span-6">
        <Breadcrumbs
          data={[product_data.category, product_data.url]}
          className="mb-2"
        />
        <ProductGallery
          image_url={urlFor(product_data.primary_image).url()}
          {...product_data}
        />
      </div>
      <div className="col-span-6">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="mr-2 rounded-full">
              <Image
                src={urlFor(product_data.brand.logo).url()}
                width={32}
                height={32}
                className="w-8 h-8"
                alt={product_data.brand.name}
              />
            </div>
            <div className="text-xs font-medium text-secondary">
              {product_data.brand.name}
            </div>
          </div>
          <span className="mx-2 text-slate-500 font-2xl">&#183;</span>
          <div className="text-xs font-medium text-slate-500">
            {product_data.gtin}
          </div>
        </div>
        <div className="my-4 text-3xl font-semibold">{product_data.title}</div>
        <div className="flex items-center">
          <div className="flex items-center">
            {new Array(5).fill(1).map((e, i) => (
              <FiStar
                key={i}
                className="mr-1 last:mr-0"
                fill={i < product_data.rating ? 'rgb(237, 207, 93)' : '#f3f5f8'}
                stroke={
                  i < product_data.rating ? 'rgb(237, 207, 93)' : '#f3f5f8'
                }
              />
            ))}
          </div>
          <div className="ml-4 text-sm text-slate-400">
            {product_data.reviews} reviews
          </div>
        </div>
        <div className="flex items-start my-8">
          <div className="mt-2 mr-1 text-base font-light text-slate-500">
            {product_data.currency}
          </div>
          <div className="text-6xl font-semibold">{product_data.price}</div>
        </div>
        <Variants data={product_data.variants} />
        <div className="my-8">
          <Sizes data={product_data.sizes} />
        </div>

        <div className="flex">
          <Button
            variant={EVariants.iconButtonWithText}
            text="Add to cart"
            icon={<FiShoppingCart size={16} />}
            alignment={EAlignment.horizontal}
            className="bg-secondary text-base text-white w-1/2 justify-center py-4 hover:bg-secondary/75"
          />
          <Button
            variant={EVariants.iconButton}
            icon={<FiHeart size={16} />}
            className="p-4 bg-primary rounded-lg ml-4 hover:bg-primary/75"
          />
        </div>
        <div className="flex items-center text-sm font-light mt-2">
          <FiTruck size={12} className="mr-1.5" />
          Free delivery on orders over $200
        </div>
      </div>
    </div>
  );
}
