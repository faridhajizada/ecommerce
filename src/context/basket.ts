import { createContext } from "react";
import { Card } from "../types/types";

interface CardI {
    products: Array<Card>;
    setProducts: (product: Card[]) => void
}

const CardContext = createContext<CardI>(
    {
        products: [],
        setProducts: () => {}
    }
);


export {CardContext}
