import ThemeSwitcher from "@/components/layout/Header/ThemeSwitcher";
import React, { useState } from "react";
import { FaBell } from "react-icons/fa"; // You can replace this with your desired notification icon
import { FiMoon, FiSun } from "react-icons/fi"; // You can replace this with your theme switch icons

const AdminHeader = () => {
    // State for controlling the notification dropdown
    const [showNotification, setShowNotification] = useState(false);

    // Dummy notification data
    const notifications = [
        {
            id: 1,
            text: "New user registered",
            timestamp: "2 hours ago",
        },
        {
            id: 2,
            text: "You have a new message",
            timestamp: "1 day ago",
        },
        {
            id: 3,
            text: "A task is due today",
            timestamp: "5 minutes ago",
        },
    ];

    const markAsRead = (notificationId: any) => {
        // Implement your logic to mark the notification as read here
        console.log(`Marked notification with ID ${notificationId} as read`);
    };

    // Toggle notification dropdown
    const toggleNotification = () => {
        setShowNotification((prevShowNotification) => !prevShowNotification);
    };

    return (
        <header className=" p-4 flex justify-between items-center relative">
            <div />
            {/* <div className=" text-xl font-semibold">Admin Dashboard</div> */}
            <div className="flex items-center space-x-4">
                <ThemeSwitcher />
                <button
                    className="bg-cyan-500 dark:bg-cyan-800  p-2 rounded-md text-white relative"
                    onClick={toggleNotification}
                    aria-label="Toggle Notification"
                >
                    <FaBell className="text-xl" />

                    <div className=" h-4 w-4 rounded-full bg-red-600 absolute top-[-1px]  right-[-1px] flex justify-center items-center">
                        <p className="text-xs">3</p>
                    </div>
                </button>
                {showNotification && (
                    <div className="absolute right-2 top-16  w-40 md:w-80 bg-cyan-700 text-white border border-gray-200 shadow-lg rounded-lg">
                        <div className="p-4 font-semibold border-b border-gray-200">
                            Notifications
                        </div>
                        <div className="p-4">
                            {notifications.map((notification) => (
                                <div
                                    key={notification.id}
                                    className="mb-4 p-3 rounded-lg bg-cyan-800 hover:bg-cyan-900 transition duration-300 flex justify-between items-center"
                                >
                                    <div className="flex-grow">
                                        <p className="font-semibold text-sm">
                                            {notification.text}
                                        </p>
                                        <p className="text-xs ">
                                            {notification.timestamp}
                                        </p>
                                    </div>
                                    <button
                                        className="px-3 py-1 text-sm text-white bg-slate-900 hover:bg-slate-950 rounded max-w-[100px]"
                                        onClick={() =>
                                            markAsRead(notification.id)
                                        }
                                    >
                                        Mark as Read
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default AdminHeader;
