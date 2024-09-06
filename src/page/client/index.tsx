import { Outlet } from "react-router-dom";
import Navbar from "../../components/Layout/client/Navbar";


export function Client() {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
} 