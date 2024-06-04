const backupItems = [
  {
    id: 1,
    title: 'Everyday Adventure Backpack',
    price: 59.99,
    description: 'Durable and spacious backpack perfect for daily use and outdoor activities. Includes a padded laptop sleeve and multiple compartments for organization.',
    category: 'men\'s clothing',
    image: 'https://images.pexels.com/photos/9461649/pexels-photo-9461649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 4.2, count: 150 }
  },
  {
    id: 2,
    title: 'Men\'s Classic Fit Polo Shirt',
    price: 35.0,
    description: 'Comfortable and stylish polo shirt with a classic fit. Made from breathable fabric, ideal for casual wear.',
    category: 'men\'s clothing',
    image: 'https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 4.5, count: 300 }
  },
  {
    id: 3,
    title: 'Waterproof Outdoor Jacket',
    price: 79.99,
    description: 'Water-resistant jacket suitable for all outdoor activities. Lightweight and breathable with adjustable hood and cuffs.',
    category: 'men\'s clothing',
    image: 'https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 4.8, count: 450 }
  },
  {
    id: 4,
    title: 'Slim Fit Denim Jeans',
    price: 45.99,
    description: 'High-quality denim jeans with a slim fit. Designed for comfort and durability, perfect for everyday wear.',
    category: 'men\'s clothing',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 3.9, count: 380 }
  },
  {
    id: 5,
    title: 'Gold & Silver Bracelet',
    price: 799.0,
    description: 'Elegant bracelet made of gold and silver. Inspired by the mythical water dragon, perfect for special occasions.',
    category: 'jewelery',
    image: 'https://images.pexels.com/photos/6716445/pexels-photo-6716445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 4.7, count: 420 }
  },
  {
    id: 6,
    title: 'Petite Micropave Ring',
    price: 185.0,
    description: 'Delicate gold ring with micropave diamonds. Perfect as a gift or for a special occasion.',
    category: 'jewelery',
    image: 'https://images.pexels.com/photos/7588404/pexels-photo-7588404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 4.0, count: 90 }
  },
  {
    id: 7,
    title: 'Princess Cut Engagement Ring',
    price: 12.99,
    description: 'Beautiful engagement ring with a princess cut diamond. Ideal for proposals, weddings, or anniversaries.',
    category: 'jewelery',
    image: 'https://images.pexels.com/photos/3091637/pexels-photo-3091637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 3.2, count: 410 }
  },
  {
    id: 8,
    title: 'Rose Gold Plated Earrings',
    price: 14.99,
    description: 'Stylish rose gold plated earrings made of stainless steel. Suitable for daily wear or special occasions.',
    category: 'jewelery',
    image: 'https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 2.1, count: 110 }
  },
  {
    id: 9,
    title: 'Portable External Hard Drive 2TB',
    price: 74.99,
    description: 'High-capacity portable external hard drive with USB 3.0 compatibility. Ideal for backing up your data and improving PC performance.',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/3361486/pexels-photo-3361486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 3.5, count: 220 }
  },
  {
    id: 10,
    title: 'Samsung 1TB Internal SSD',
    price: 129.99,
    description: 'Fast and reliable internal SSD with read/write speeds of up to 535MB/s. Perfect for upgrading your PC for better performance.',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/2942361/pexels-photo-2942361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 3.1, count: 500 }
  },
  {
    id: 11,
    title: 'Sandisk Silicon Power 256GB SSD',
    price: 95.0,
    description: '256GB SSD with 3D NAND technology for high transfer speeds and improved system performance. Slim design suitable for ultrabooks.',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/13595095/pexels-photo-13595095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 4.9, count: 330 }
  },
  {
    id: 12,
    title: '4TB Gaming Drive for PS4',
    price: 129.99,
    description: 'Expand your PS4 gaming experience with this portable external hard drive. Sleek design with high capacity and a 3-year warranty.',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/9334552/pexels-photo-9334552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 4.9, count: 410 }
  },
  {
    id: 13,
    title: 'Acer 21.5" Full HD Monitor',
    price: 149.99,
    description: 'Full HD IPS display with a refresh rate of 75Hz. Ultra-thin design with zero-frame, perfect for a seamless viewing experience.',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/19012039/pexels-photo-19012039/free-photo-of-acer-predator-triton-300-se-gaming-laptop-connected-to-a-monitor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 3.1, count: 270 }
  },
  {
    id: 14,
    title: 'Samsung 49" Curved Gaming Monitor',
    price: 1199.99,
    description: '49-inch super ultrawide curved gaming monitor with QLED technology and a 144Hz refresh rate. Perfect for immersive gaming.',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 2.4, count: 160 }
  },
  {
    id: 15,
    title: '3-in-1 Snowboard Jacket for Women',
    price: 99.99,
    description: 'Versatile 3-in-1 snowboard jacket with a detachable liner and adjustable hood. Perfect for winter sports and outdoor activities.',
    category: 'women\'s clothing',
    image: 'https://images.pexels.com/photos/7357320/pexels-photo-7357320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 3.0, count: 250 }
  },
  {
    id: 16,
    title: 'Faux Leather Moto Biker Jacket',
    price: 49.95,
    description: 'Stylish faux leather biker jacket with a removable hood. Designed for comfort and durability, with detailed stitching and multiple pockets.',
    category: 'women\'s clothing',
    image: 'https://images.pexels.com/photos/20462156/pexels-photo-20462156/free-photo-of-man-wearing-a-safety-helmet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 3.2, count: 360 }
  },
  {
    id: 17,
    title: 'Striped Climbing Raincoat',
    price: 59.99,
    description: 'Lightweight raincoat with a hood and adjustable waist. Fully lined with stripes, perfect for outdoor activities and casual wear.',
    category: 'women\'s clothing',
    image: 'https://images.pexels.com/photos/1787200/pexels-photo-1787200.jpeg',
    rating: { rate: 4.0, count: 700 }
  },
  {
    id: 18,
    title: 'Solid Short Sleeve V-Neck Top',
    price: 14.99,
    description: 'Comfortable short sleeve top with a boat neck and ribbed details. Made from a blend of rayon and spandex for a great fit.',
    category: 'women\'s clothing',
    image: 'https://images.pexels.com/photos/24512873/pexels-photo-24512873/free-photo-of-woman-in-striped-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 4.8, count: 150 }
  },
  {
    id: 19,
    title: 'Moisture-Wicking T-Shirt',
    price: 12.95,
    description: 'Lightweight and breathable t-shirt made from 100% polyester. Features a V-neck collar and a slimmer fit, ideal for active wear.',
    category: 'women\'s clothing',
    image: 'https://images.pexels.com/photos/13312118/pexels-photo-13312118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 4.6, count: 160 }
  },
  {
    id: 20,
    title: 'Casual Cotton Short Sleeve Tee',
    price: 17.99,
    description: 'Casual short sleeve t-shirt made from a cotton and spandex blend. Features a letter print and V-neck, perfect for everyday wear.',
    category: 'women\'s clothing',
    image: 'https://images.pexels.com/photos/4350278/pexels-photo-4350278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: { rate: 3.8, count: 160 }
  }
];

export { backupItems };
