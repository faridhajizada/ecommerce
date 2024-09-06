import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {

    const nav = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
                <p className="text-lg text-gray-600 mb-4">Oops! The page you’re looking for doesn’t exist.</p>
                <button 
                    onClick={() =>  nav('/', {replace: true})}
                    className="inline-block px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export { NotFound };
