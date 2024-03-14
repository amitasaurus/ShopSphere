import Banner from './components/Banner';
import CategoryCard from './components/CategoryCard';
import cn from '@/utils/cn';
import { noto_serif } from '@/utils/fonts';
import Link from 'next/link';
import Slider from './components/Slider';
import Features from './components/Features';
import client from '../../client';
import type { Banner as TBanner, Category, Trending } from '@/types/index';
import { bannerQuery, categoriesQuery, trendingQuery } from '@/queries';
import { urlFor } from '@/utils/sanity';

export default async function Home() {
  const banner = await client.fetch<TBanner[]>(bannerQuery);
  const categories = await client.fetch<Category[]>(categoriesQuery);
  const trending = await client.fetch<Trending[]>(trendingQuery);
  const banner_data = banner[0];
  const category_data = categories[0];
  const trending_data = trending[0];

  return (
    <main className="p-4">
      <Banner
        imageUrl={urlFor(banner_data.image).url()}
        title={banner_data.title}
        subtitle={banner_data.subtitle}
        redirectTo={banner_data.redirectTo}
      />
      {/* Categories */}
      <div className="py-12">
        <div
          className={cn(
            noto_serif.className,
            'text-3xl font-normal text-center'
          )}
        >
          {category_data.title}
        </div>
        <div className="my-2 text-base font-light text-center text-slate-500">
          {category_data.subtitle}
        </div>
        <div className="flex justify-between mt-12">
          {category_data.categories.map((cat, i) => (
            <Link href={cat.url} key={i}>
              <CategoryCard
                image_url={urlFor(cat.image).url()}
                title={cat.title}
              />
            </Link>
          ))}
        </div>
      </div>
      {/* Trending Products */}
      <div className="py-12">
        <div
          className={cn(
            noto_serif.className,
            'text-3xl font-normal text-center'
          )}
        >
          {trending_data.title}
        </div>
        <div className="my-2 text-base font-light text-center text-slate-500">
          {trending_data.subtitle}
        </div>
        <div className="flex justify-between mt-12">
          <Slider slides={trending_data.products} />
        </div>
      </div>
      {/* Features */}
      <div className="pt-12">
        <Features />
      </div>
    </main>
  );
}
