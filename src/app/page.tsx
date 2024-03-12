import Image from 'next/image';
import Banner, { ImgPos } from './components/Banner';
import { banner_data } from '@/data/banner';
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
    </main>
  );
}
