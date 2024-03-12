import Image from 'next/image';
import Banner, { ImgPos } from './components/Banner';
import { banner_data } from '@/data/banner';
import { category_data } from '@/data/categories';
import { trending_data } from '@/data/trending';
import CategoryCard from './components/CategoryCard';
import cn from '@/utils/cn';
import { noto_serif } from '@/utils/fonts';
import Link from 'next/link';
import Slider from './components/Slider';
import Features from './components/Features';

export default function Home() {
  return (
    <main className="p-4">
      <Banner
        imageUrl={banner_data.imageUrl}
        height={banner_data.height}
        imagePos={banner_data.imagePos}
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
              <CategoryCard image_url={cat.image_url} title={cat.title} />
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
