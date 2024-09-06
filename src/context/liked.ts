import { createContext } from "react";
import { CardProps } from "../types/types";


interface Liked {
    products: Array<CardProps>;
    setProducts: (product: CardProps[]) => void
}


const LikedContext = createContext<Liked>({
    products: [],
    setProducts: () => {}
})


export {LikedContext}