import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { AdminNavbarContext } from "../../context/adminnavbar";
import { useEffect, useState } from "react";
import Navbar from "../../components/Layout/admin/Navbar";


export function Admin() {

    const [diretory, setDirectory] = useState('');
    const auth = useLoaderData()
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth) {
            navigate('/admin/signin')
        }
    }, [auth]);


    return (
        <>
            <AdminNavbarContext.Provider value={{activeDirectory: diretory, setActiveDirectory: setDirectory}}>
                <Navbar />
                <Outlet />
            </AdminNavbarContext.Provider>
        </>
    )
} 