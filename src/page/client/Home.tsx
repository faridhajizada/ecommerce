import { HomeMain } from "../../components/HomeMain";
import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export function Home() {

    const data = useLoaderData();
    const nav = useNavigate();

    useEffect(() => {
        if (!data) {
            nav("/signin");
        }
    }, []);

    return (
       <>
        <HomeMain />
       </>
    )
}