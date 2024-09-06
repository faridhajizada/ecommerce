import { CardMain } from "../../components/BasketMain";
import { useContext, useEffect } from "react";
import { NavbarContext } from "../../context/navbar";

export function Card() {

    const navbar = useContext(NavbarContext);

    useEffect(() => {
        navbar.setActiveDirectory("card");
    }, []);

    return (
        <>
           <CardMain />
        </>
    )
}