export const getProductQuery = function (slug: string): string {
  return `*[_type == 'product' && url.current == ${slug}]{
        _id,    
        title,
        'url': url.current,
        primary_image,
        price,
        currency,
        'category': (category -> ).title,
        rating,
        reviews,
        sizes,
        brand -> {name, logo},
        gallery,
        gtin,
        'variants': *[_type == 'product' && references(^._id)]{
            title,
            primary_image,
            'url': url.current
        }
    }`;
};
