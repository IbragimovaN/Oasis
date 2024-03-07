export const transformProduct = (dbProduct) => ({
	id: dbProduct.id,
	title: dbProduct.title,
	brand: dbProduct.brand,
	category: dbProduct.category,
	skinType: dbProduct.skin_type,
	price: dbProduct.price,
	rating: dbProduct.rating,
	imageUrl: dbProduct.image_url,
	description: dbProduct.description,
});
