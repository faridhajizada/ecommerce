import { useContext, useEffect, useState } from "react";
import { CardProps } from "../../types/types";
import { AdminNavbarContext } from "../../context/adminnavbar";


export function AdminAdd() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<any>("");
    const [sortConfig, setSortConfig] = useState<{ key: keyof CardProps; direction: string } | null>(null);  
    
    const [products, setProducts] = useState([]);
    
    const navbar = useContext(AdminNavbarContext);
    useEffect(() => {
        navbar.setActiveDirectory("/admin/add")
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newProduct: CardProps = {
            id: products.length + 1,  // Generate a simple unique ID
            title,
            price,
            category,
            description,
            image,
            rating: { rate: 0, count: 0 }, // Assuming default rating
        };

        setProducts([...products, newProduct]);
        setAdd(false);
    };

    const handleCancel = () => {
        setAdd(false);
    };


    const sortBy = (key: keyof CardProps) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
        const sortedProducts = [...products].sort((a, b) => {
            if (a[key] < b[key]) {
                return direction === 'ascending' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        setProducts(sortedProducts);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full p-4">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
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
                            required
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
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            rows={3}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="text"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Add Product
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
                <table className="min-w-full bg-white rounded-lg shadow-md mt-[50px] pl-10 pr-10">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-4 border-b text-left">
                                <button onClick={() => sortBy('id')} className="flex items-center">
                                    ID
                                    <span className="ml-2">{sortConfig?.key === 'id' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : ''}</span>
                                </button>
                            </th>
                            <th className="py-2 px-4 border-b">Image</th>
                            <th className="py-3 px-4 border-b text-left">
                                <button onClick={() => sortBy('title')} className="flex items-center">
                                    Title
                                    <span className="ml-2">{sortConfig?.key === 'title' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : ''}</span>
                                </button>
                            </th>
                            <th className="py-3 px-4 border-b text-left">Price</th>
                            <th className="py-3 px-4 border-b text-left">Category</th>
                            <th className="py-3 px-4 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{product.id}</td>
                                <td className="py-2 px-4 border-b">
                                    <img src={product.image} alt={product.title} className="h-16 w-16 object-cover" />
                                </td>
                                <td className="py-2 px-4 border-b">{product.title}</td>
                                <td className="py-2 px-4 border-b">${product.price}</td>
                                <td className="py-2 px-4 border-b">{product.category}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        onClick={() => HandleEdit(product)}
                                        className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(product)}
                                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );
}
