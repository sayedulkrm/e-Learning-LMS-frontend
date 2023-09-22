"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";

type Props = {
    user: any; // Pass the user data as a prop
};

const Profile: React.FC<Props> = ({ user }) => {
    const [avatar, setAvatar] = useState(null);
    const [active, setActive] = useState(1);

    const logoutHandler = async () => {
        console.log("Logout");
    };

    return (
        <div className=" flex flex-col md:flex-row justify-start items-start min-h-screen gap-3">
            {/* Sidebar */}
            <div className="w-full md:w-1/3">
                <Sidebar
                    active={active}
                    user={user}
                    avatar={avatar}
                    setActive={setActive}
                    logoutHandler={logoutHandler}
                />
            </div>

            {/* Main Profile */}
            <div className=" w-full md:w-2/3 rounded-lg p-6">
                <h1 className="text-3xl md:text-5xl font-semibold mb-4">
                    {user.name} Profile
                </h1>
                <div>
                    <p className="text-2xl my-2">Email: {user.email}</p>
                    <p className="text-2xl my-2">Role: {user.role}</p>
                    <p className="text-2xl my-2">
                        Account Created:{" "}
                        {new Date(user.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-2xl my-2">
                        Last Updated:{" "}
                        {new Date(user.updatedAt).toLocaleDateString()}
                    </p>
                    <p className="text-2xl my-2">
                        Verified: {user.isVerified ? "Yes" : "No"}
                    </p>
                </div>
                {/* Additional profile information can be displayed here */}
            </div>
        </div>
    );
};

export default Profile;
