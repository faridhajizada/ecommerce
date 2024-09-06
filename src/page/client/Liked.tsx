import { LikedMain } from "../../components/LikedMain";
import { useContext, useEffect } from "react";
import { NavbarContext } from "../../context/navbar";

export function Liked() {

    const navbar = useContext(NavbarContext);

    useEffect(() => {
        navbar.setActiveDirectory("liked");
    }, []);

    return (
        <>
           <LikedMain />
        </>
    )
}