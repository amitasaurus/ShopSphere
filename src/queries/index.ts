export const bannerQuery = `*[_type == "banner"]{title, subtitle, redirectTo,image}`;
export const categoriesQuery = `*[_type == "category-home"]{title, subtitle, categories[] -> {title, image, url}}`;
export const trendingQuery = `*[_type == "trending"]{
  title, 
  subtitle,
  products[] -> {
    title,
    'url': url.current,
    primary_image,
    price,
    currency,
    'category': (category -> {title}).title
  }
}`;
