import React from "react";

const Loader = () => {
    return (
        <div
            className={`flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 duration-300 to-black`}
        >
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
    );
};

export default Loader;
