import { ChangeEvent, useEffect, useState } from "react";
import { Card } from "./Card";



export function ProductsMain() {
    const [data, setData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setFilteredData(data);  // Initialize filteredData with all products
            });
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const str = e.target.value.trim().toLowerCase();

        const newProducts = data.filter((product: any) => {
            return product.title.toLowerCase().includes(str) || 
                product.description.toLowerCase().includes(str) || 
                product.category.toLowerCase().includes(str);
        });
        setFilteredData(newProducts);
    }

    const HandlePriceSort = () => {
        const sortedProducts = [...filteredData].sort((a, b) => a.price - b.price);
        setFilteredData(sortedProducts);
    }

    const HandleCategorySort = () => {
        const sortedProducts = [...filteredData].sort((a, b) => a.category.localeCompare(b.category));
        setFilteredData(sortedProducts);
    }

    const HandleTitleSort = () => {
         const sortedProducts = [...filteredData].sort((a, b) => a.title.localeCompare(b.title));
        setFilteredData(sortedProducts);
    }

    const HandleRatingSort = () => {      
        const sortedProducts = [...filteredData].sort((a, b) => a.rating.rate - b.rating.rate);
        setFilteredData(sortedProducts);
    }

    const HandleSort = (e: ChangeEvent<HTMLSelectElement>) => {
        switch(e.target.value) {
            case 'Price': 
                HandlePriceSort() 
                break;
            case 'Category':
                HandleCategorySort();
                break;
            case 'Title':
                HandleTitleSort();
                break;
            case 'Rating':
                HandleRatingSort();
                break;
            default:
                break;
        }
        
    }

    return (
        <div className="flex flex-col items-center justify-center gap-[10px] mt-[100px]">
            <div className="">
                <input 
                    type="text"
                    name="product"
                    id="product" 
                    className="w-[700px] h-[40px] rounded-md border mr-[100px] pl-3" 
                    placeholder="Product"
                    onChange={handleChange}
                />

                <select 
                    name="sort" 
                    id="select"
                    onChange={e => HandleSort(e)}
                    className="w-[200px] h-[40px] rounded-md border pl-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="Category">Category</option>
                    <option value="Price">Price</option>
                    <option value="Title">Title</option>
                    <option value="Rating">Rating</option>
                </select>

            </div>
            <div className="flex flex-wrap p-10 items-start justify-center h-screen gap-[10px] mt-10">
                {
                    filteredData.map((product: any, index: number) => {
                        return(
                            <Card product={product} key={index} />
                        )
                    })
                }
            </div>
        </div>
    );
}
