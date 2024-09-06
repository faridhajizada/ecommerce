
export function TopUp({ confirmDelete, cancelDelete }) {
    return (
        <div className="w-screen h-screen bg-[rgba(10,10,10,0.2)] flex items-center justify-center absolute top-0 left-0">
            <div className="bg-white p-10 rounded-lg shadow-lg flex items-center justify-center gap-5">
                <button 
                    className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
                    onClick={confirmDelete}
                >
                    Delete
                </button>
                <button 
                    className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300"
                    onClick={cancelDelete}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
