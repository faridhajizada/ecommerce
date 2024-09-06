import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminNavbarContext } from '../../context/adminnavbar';

const Dashboard: React.FC = () => {

    const navigate = useNavigate();

    const HandleLogOut = () => {
        localStorage.removeItem('admin');
        navigate('/admin/signin', {replace: true})
    }

    const navbar = useContext(AdminNavbarContext);
    useEffect(() => {
        navbar.setActiveDirectory("/admin/dashboard")
    }, [])

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                </div>
                <nav className="mt-6">
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="flex items-center text-gray-800 p-2 hover:bg-gray-200 rounded-md">
                                <span className="ml-2">Home</span>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="flex items-center text-gray-800 p-2 hover:bg-gray-200 rounded-md">
                                <span className="ml-2">Products</span>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="flex items-center text-gray-800 p-2 hover:bg-gray-200 rounded-md">
                                <span className="ml-2">Orders</span>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="flex items-center text-gray-800 p-2 hover:bg-gray-200 rounded-md">
                                <span className="ml-2">Users</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            <div className="flex flex-col flex-1">
                <header className="bg-white shadow p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
                        <div>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={HandleLogOut}>
                                Logout
                            </button>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Cards */}
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Total Products</h3>
                            <p className="text-2xl font-bold text-gray-800">1,234</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Total Orders</h3>
                            <p className="text-2xl font-bold text-gray-800">567</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Total Users</h3>
                            <p className="text-2xl font-bold text-gray-800">890</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue</h3>
                            <p className="text-2xl font-bold text-gray-800">$12,345</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">New Customers</h3>
                            <p className="text-2xl font-bold text-gray-800">123</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Pending Orders</h3>
                            <p className="text-2xl font-bold text-gray-800">45</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
