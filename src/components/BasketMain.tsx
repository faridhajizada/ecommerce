import { useContext } from "react";
import { CardContext } from "../context/basket";
import { Card } from "./Card";
import { Link } from "react-router-dom";

export function CardMain() {
    const { products } = useContext(CardContext);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100">
            {
                products.length > 0 ?
                <div className="flex flex-wrap items-start justify-center gap-10">
                    {products.map((item, index) => (
                        <Card product={item} key={index} />
                    ))}
                </div> :
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Basket is Empty</h1>
                    <Link to="/products" className="w-[200px] h-[50px] rounded-lg bg-orange-400 text-black flex items-center justify-center font-bold shadow-lg hover:bg-orange-500 transition duration-300">
                        Back to Products
                    </Link>
                </div>
            }
        </div>
    );
}
