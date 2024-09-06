import { ProductsMain } from "../../components/Products";
import { useContext, useEffect } from "react";
import { NavbarContext } from "../../context/navbar";

export function Products() {

    const navbar = useContext(NavbarContext);

    useEffect(() => {
        navbar.setActiveDirectory("products");
    }, []);




    return (
        <>
            <ProductsMain />
        </>
    )
}