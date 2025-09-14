import { Product } from '../contexts/CartContext';
import isolateCappuccino from '../assets/isolate-cappuccino.jpg';
import bcaaTropicalPunch from '../assets/bcaa-tropical-punch.jpg';
import greensMixedBerry from '../assets/greens-mixed-berry.jpg';
import isolateChocolate from '../assets/isolate-chocolate.jpg';
import veganChocolate from '../assets/vegan-chocolate.jpg';

export const wheyProteinProducts: Product[] = [
  {
    id: 'isolate-cappuccino',
    name: 'ISOLATE - 100% Isolate Whey Protein',
    price: 49.99,
    image: isolateCappuccino,
    description: 'Only 2g of Carbohydrates per Serving. Digestive Enzymes for Absorption. Cold-Processed, Ultra-Filtered Whey Protein. Mixes Easily & Tastes Great.',
    category: 'whey-protein',
    benefits: [
      '100% Isolate Whey Protein',
      'Only 2g carbs per serving',
      'Digestive enzymes included',
      'Cold-processed for purity',
      'Ultra-filtered formula',
      'Mixes easily'
    ],
    rating: 4.8,
    reviews: 247,
    inStock: true,
    flavor: 'Cappuccino',
    weight: '480g (1 LB)',
    servings: 16
  },
  {
    id: 'isolate-chocolate',
    name: 'ISOLATE - 100% Isolate Whey Protein',
    price: 47.99,
    image: isolateChocolate,
    description: 'Only 1g of Carbohydrates per Serving. Digestive Enzymes for Absorption. Cold-Processed, Ultra-Filtered Whey Protein. Mixes Easily & Tastes Great.',
    category: 'whey-protein',
    benefits: [
      '100% Isolate Whey Protein',
      'Only 1g carbs per serving',
      'Digestive enzymes included',
      'Cold-processed for purity',
      'Ultra-filtered formula',
      'Rich chocolate flavor'
    ],
    rating: 4.9,
    reviews: 312,
    inStock: true,
    flavor: 'Chocolate Milkshake',
    weight: '464g (1 LB)',
    servings: 15
  },
  {
    id: 'vegan-chocolate',
    name: 'VEGAN - Premium Protein Blend',
    price: 59.99,
    image: veganChocolate,
    description: 'Three sourced protein blend. No artificial flavors, colors, or sweeteners. Sweetened with stevia. Easier for digestion.',
    category: 'whey-protein',
    benefits: [
      'Plant-based protein blend',
      'No artificial additives',
      'Sweetened with stevia',
      'Easy digestion',
      'Three protein sources',
      'Vegan-friendly'
    ],
    rating: 4.7,
    reviews: 189,
    inStock: true,
    flavor: 'Chocolate Milkshake',
    weight: '907g (2 LB)',
    servings: 30
  },
  {
    id: 'bcaa-tropical',
    name: 'BCAA+ EAAs - Essential Amino Acids',
    price: 34.99,
    image: bcaaTropicalPunch,
    description: 'Essential Amino Acids with Electrolyte Hydration. Natural Orange, Mango, & Pineapple Flavors for optimal recovery and hydration.',
    category: 'whey-protein',
    benefits: [
      'Essential amino acids',
      'Electrolyte hydration',
      'Natural fruit flavors',
      'Optimal recovery support',
      'Enhanced hydration',
      'Post-workout formula'
    ],
    rating: 4.6,
    reviews: 156,
    inStock: true,
    flavor: 'Tropical Punch',
    weight: '297g (10.47 OZ)',
    servings: 25
  },
  {
    id: 'greens-mixed-berry',
    name: 'Greens - Organic Greens + Reds',
    price: 39.99,
    image: greensMixedBerry,
    description: 'Organic Greens + Reds with Amazing Taste. No Artificial Flavors or Colors. Natural mixed berry flavor for daily nutrition.',
    category: 'whey-protein',
    benefits: [
      'Organic greens and reds',
      'No artificial additives',
      'Natural berry flavor',
      'Daily nutrition support',
      '35 servings per container',
      'Antioxidant rich'
    ],
    rating: 4.5,
    reviews: 203,
    inStock: true,
    flavor: 'Mixed Berry',
    weight: '270g (9.5 OZ)',
    servings: 35
  }
];

export const medicalEquipmentProducts: Product[] = [
  {
    id: 'blood-pressure-monitor',
    name: 'Digital Blood Pressure Monitor',
    price: 89.99,
    image: '/placeholder.svg',
    description: 'Professional-grade digital blood pressure monitor with large display and memory storage.',
    category: 'medical-equipment',
    benefits: [
      'Accurate readings',
      'Large LCD display',
      'Memory storage',
      'Easy operation',
      'FDA approved'
    ],
    rating: 4.4,
    reviews: 89,
    inStock: true
  },
  {
    id: 'pulse-oximeter',
    name: 'Fingertip Pulse Oximeter',
    price: 24.99,
    image: '/placeholder.svg',
    description: 'Compact pulse oximeter for monitoring oxygen saturation and pulse rate.',
    category: 'medical-equipment',
    benefits: [
      'Instant readings',
      'Portable design',
      'Long battery life',
      'Medical grade accuracy',
      'Easy to use'
    ],
    rating: 4.3,
    reviews: 156,
    inStock: true
  },
  {
    id: 'thermometer-digital',
    name: 'Digital Infrared Thermometer',
    price: 34.99,
    image: '/placeholder.svg',
    description: 'Non-contact infrared thermometer with fast and accurate temperature readings.',
    category: 'medical-equipment',
    benefits: [
      'Non-contact measurement',
      'Fast 1-second reading',
      'Fever alarm',
      'Memory recall',
      'Hygienic operation'
    ],
    rating: 4.2,
    reviews: 78,
    inStock: true
  }
];

export const getAllProducts = (): Product[] => {
  return [...wheyProteinProducts, ...medicalEquipmentProducts];
};

export const getProductById = (id: string): Product | undefined => {
  return getAllProducts().find(product => product.id === id);
};

export const getProductsByCategory = (category: 'whey-protein' | 'medical-equipment'): Product[] => {
  return getAllProducts().filter(product => product.category === category);
};