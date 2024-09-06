import { useContext, useEffect, useState } from 'react';
import { CardProps } from '../types/types';
import { LikedContext } from '../context/liked';
import { Link } from 'react-router-dom';
import { CardContext } from '../context/basket';

export function Card({ product }: CardProps) {
  const [liked, setLiked] = useState(false);

  const L = useContext(LikedContext);
  const basket = useContext(CardContext);

  useEffect(() => {
    const isLiked = L.products.some((item: any) => item && item.id === product?.id);
    setLiked(isLiked);
  }, [L.products, product?.id]);

  const handleLike = () => {
    if (liked) {
      L.setProducts(L.products.filter((item: any) => item.id !== product?.id));
      setLiked(false);
    } else {
      L.setProducts([...L.products, product]);
      setLiked(true);
    }
  };

  return (
    <div className="w-[350px] h-[450px] rounded overflow-hidden shadow-lg m-4 relative bg-white">
      <Link to={`/product/${product?.id}`} className="flex items-start justify-center w-full h-[200px] overflow-hidden">
        <img className="w-full h-full object-contain p-4" src={product?.image} alt={product?.title} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{product?.title}</div>
        <div className="text-gray-600">${product?.price}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product?.rating?.rate} / 5 ({product?.rating?.count} reviews)
        </span>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center justify-between absolute bottom-0 left-0 right-0">
        <button 
          onClick={handleLike} 
          className={`inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            liked ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {liked ? 'Liked' : 'Like'}
        </button>
        {
          basket.products.some((item: any) => item.id === product?.id) && 
          <button
            onClick={() => basket.setProducts(basket.products.filter((item: any) => item.id !== product?.id))}
            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-red-500 hover:text-white transition duration-300"
          >
            Remove
          </button>
        }
      </div>
    </div>
  );
}
