import { useState } from "react";
import { CardProps } from "../../types/types";

interface EditProductsProps {
    product: CardProps;
    products: CardProps[];
    setProducts: React.Dispatch<React.SetStateAction<CardProps[]>>;
    setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditProducts({ product, products, setProducts, setEdit }: EditProductsProps) {
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const updatedProduct = { ...product, title, price, category };
        const updatedProducts = products.map(p => p.id === product.id ? updatedProduct : p);
        setProducts(updatedProducts);
        setEdit(false);
    };

    const handleCancel = () => {
        setEdit(false);
    };

    return (
        <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg absolute mb-[1000px]">
            <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
