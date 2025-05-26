import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Fern', price: 20, category: 'Indoor', thumbnail: 'https://www.thegreengrower.nz/cdn/shop/articles/fern_the_green_grower.webp?v=1693203393' },
  { id: 2, name: 'Cactus', price: 15, category: 'Succulent', thumbnail: 'https://images.immediate.co.uk/production/volatile/sites/10/2018/02/3a8b67b7-2416-4ef2-971a-67f94bc64496-b5fe2f6.jpg' },
  { id: 3, name: 'Snake Plant', price: 25, category: 'Indoor', thumbnail: 'https://greenparadiselive.com/cdn/shop/products/SilverSnakePlant_1200x1200.jpg?v=1718429020' },
  { id: 4, name: 'Peace Lily', price: 30, category: 'Flowering', thumbnail: 'https://media.houseandgarden.co.uk/photos/64677ebe23689cbbe1bbad8f/4:3/w_2859,h_2144,c_limit/492766473' },
  { id: 5, name: 'Aloe Vera', price: 18, category: 'Succulent', thumbnail: 'https://vgrgardens.com/wp-content/uploads/2024/09/Aloevera-Copy.jpg' },
  { id: 6, name: 'Money Plant', price: 22, category: 'Indoor', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhb543-4LFVCFd3l7GGRQI33wz4llDfwI7HA&s' },
  { id: 7, name: 'Rubber Plant', price: 35, category: 'Indoor', thumbnail: 'https://www.thespruce.com/thmb/q3KTpwsdJICsvn9yxKN4D_Q3zLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/peperomia-obtusifolia-growing-guide-5271088-hero-4b5c709b63414d48b097f8f27102fdf4.JPG' },
  { id: 8, name: 'ZZ Plant', price: 28, category: 'Indoor', thumbnail: 'https://www.realsimple.com/thmb/9yMs2mrJjeQ_UsNZajI85Z5VI9w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/zz-plant-GettyImages-1387302222-e9e228907c3e4e4ea3481898c90d1a53.jpg' },
];

const ProductListingPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Our Houseplants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
