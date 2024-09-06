import { useContext, useEffect, useState } from "react";
import { CardProps } from "../../types/types";
import { TopUp } from "../../components/admin/TopUp";
import { EditProducts } from "../../components/admin/EditProduct";
import { AdminNavbarContext } from "../../context/adminnavbar";

export function AdminProducts() {
    const [products, setProducts] = useState<CardProps[]>([]);
    const [sortConfig, setSortConfig] = useState<{ key: keyof CardProps; direction: string } | null>(null);
    const [topup, setTopup] = useState(false);
    const [productToDelete, setProductToDelete] = useState<CardProps | null>(null);
    const [productToEdit, setProductToEdit] = useState<CardProps | null>(null);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const navbar = useContext(AdminNavbarContext);
    useEffect(() => {
        navbar.setActiveDirectory("/admin/products")
    }, [])

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

    const handleDelete = (product: CardProps) => {
        setTopup(true);
        setProductToDelete(product);
    };

    const confirmDelete = () => {
        if (productToDelete) {
            setProducts(products => products.filter(p => p.id !== productToDelete.id));
            setTopup(false);
            setProductToDelete(null);
        }
    };

    const cancelDelete = () => {
        setTopup(false);
        setProductToDelete(null);
    };

    const HandleEdit = (prd) => {
        setProductToEdit(prd)
        setEdit(true)
    }

    return (
        <div className="flex flex-col items-center justify-center w-full p-4">
            {topup && (
                <TopUp 
                    confirmDelete={confirmDelete} 
                    cancelDelete={cancelDelete}
                />
            )}

            {
                edit && 
                    <EditProducts 
                        product={productToEdit} 
                        products={products}
                        setProducts={setProducts} 
                        setEdit={setEdit}
                    />
            }
            <h1 className="text-3xl font-bold mb-6">Admin Products</h1>
            <div className="overflow-x-auto w-full">
                <table className="min-w-full bg-white rounded-lg shadow-md">
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
        </div>
    );
}
