import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CardContext } from '../context/basket';

const CardOpened = () => {
    const { productID } = useParams();
    const [product, setProduct] = React.useState(null);
    const basket = useContext(CardContext)

    React.useEffect(() => {
        // Fetch the product data based on the productID
        fetch(`https://fakestoreapi.com/products/${productID}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [productID]);

    if (!product) {
        return <div className="flex justify-center items-center h-screen"><div className="text-xl">Loading...</div></div>;
    }

    const handleAdd = () => {
        console.log(basket);
        basket.setProducts([
            ...basket.products, product
        ])
    }

    return (
        <div className="container mx-auto p-4 flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="flex">
                    <div className="w-1/2 p-20">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-1/2 p-4 flex items-start justify-center flex-col">
                        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                        <p className="text-gray-700 mb-4">{product.description}</p>
                        <p className="text-gray-900 font-semibold mb-2">Category: {product.category}</p>
                        <p className="text-gray-900 font-semibold mb-2">Price: ${product.price}</p>
                        <div className="flex items-center mb-4">
                            <span className="text-yellow-500 mr-2">
                                {Array.from({ length: Math.round(product.rating.rate) }, (_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.478 4.564a1 1 0 00.95.69h4.797c.969 0 1.371 1.24.588 1.81l-3.88 2.825a1 1 0 00-.364 1.118l1.478 4.564c.3.921-.755 1.688-1.539 1.118l-3.88-2.825a1 1 0 00-1.176 0l-3.88 2.825c-.784.57-1.838-.197-1.539-1.118l1.478-4.564a1 1 0 00-.364-1.118L2.64 9.991c-.783-.57-.381-1.81.588-1.81h4.797a1 1 0 00.95-.69L9.049 2.927z" />
                                    </svg>
                                ))}
                            </span>
                            <span className="text-gray-700">({product.rating.count} reviews)</span>
                        </div>
                        <button
                            onClick={handleAdd}
                            className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {CardOpened};
