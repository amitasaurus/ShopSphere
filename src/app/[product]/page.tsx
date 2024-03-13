import Image from 'next/image';
import ProductGallery from '../components/ProductGallery';
import { product_data } from '@/data/product';
import { FiStar } from 'react-icons/fi';
import Breadcrumbs from '../components/Breadcrumbs';
import Variants from '../components/Variants';

export default function Page({ params }: { params: { product: string } }) {
  console.log(params.product);
  return (
    <div className="grid w-full min-h-screen grid-cols-12 p-4">
      <div className="col-span-6">
        <Breadcrumbs
          data={[product_data.category, product_data.url]}
          className="mb-2"
        />
        <ProductGallery {...product_data} />
      </div>
      <div className="col-span-6">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-2 rounded-full">
              <Image
                src={product_data.brand.logo}
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
          <div className="text-xs font-medium text-slate-500">
            {product_data.id}
          </div>
        </div>
        <div className="my-4 text-3xl font-semibold">{product_data.title}</div>
        <div className="flex items-center">
          <div className="flex items-center">
            {new Array(5).fill(1).map((e, i) => (
              <FiStar
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
        <div>
          <Variants data={product_data.variants} />
        </div>
      </div>
    </div>
  );
}
