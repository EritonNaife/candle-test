import type { PageServerLoad } from './$types';

export interface CollectionCard {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tag: string;
}

interface FeaturedProduct {
  name: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  imageSrc: string;
}

export const load: PageServerLoad = async () => {
  const collections: CollectionCard[] = [
    {
      imageSrc: '/candle1.jpg',
      imageAlt: 'Signature Collection candles',
      title: 'Signature Collection',
      description: 'Experience our most popular scents',
      tag: 'Artesanal'
    },
    {
      imageSrc: '/candle3.jpg',
      imageAlt: 'Seasonal Collection candles',
      title: 'Seasonal Collection',
      description: 'Limited edition fragrances for every season',
      tag: 'Seasonal'
    },
    {
      imageSrc: '/candle4.jpg',
      imageAlt: 'Luxury Collection candles',
      title: 'Luxury Collection',
      description: 'Premium scents with the finest ingredients',
      tag: 'Luxury'
    },
  ];

  const featuredProducts: FeaturedProduct[] = [
    {
      name: "Vanilla Dream",
      description: "Warm vanilla with hints of caramel",
      price: "$34.99",
      rating: 4.8,
      reviews: 152,
      imageSrc: "/vanilla-candle.jpg"
    },
    {
      name: "Citrus Breeze",
      description: "Fresh orange and lemon zest",
      price: "$29.99",
      rating: 4.6,
      reviews: 98,
      imageSrc: "/citrus-candle.jpg"
    },
    {
      name: "Sandalwood Serenity",
      description: "Earthy sandalwood with amber notes",
      price: "$39.99",
      rating: 4.9,
      reviews: 201,
      imageSrc: "/sandalwood-candle.jpg"
    },
    {
      name: "Lavender Fields",
      description: "Calming French lavender essence",
      price: "$32.99",
      rating: 4.7,
      reviews: 134,
      imageSrc: "/lavender-candle.jpg"
    }
  ];

  return {
    collections,
    featuredProducts
  };
};