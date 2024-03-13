export const bannerQuery = `*[_type == "banner"]{title, subtitle, redirectTo,image}`;
export const categoriesQuery = `*[_type == "category-home"]{title, subtitle, categories[] -> {title, image, url}}`;
