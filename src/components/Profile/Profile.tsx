"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { useLogoutQuery } from "@/redux/features/auth/authApi";
import { signOut } from "next-auth/react";
import Image from "next/image";
import defaultAvatar from "../../../public/assets/rabbit.png";
import { AiOutlineCamera } from "react-icons/ai";
import { useUpdateAvatarMutation } from "@/redux/features/user/userApi";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import ChangePassword from "./utils/ChangePassword/ChangePassword";

type Props = {
    user: any; // Pass the user data as a prop
};

const Profile: React.FC<Props> = ({ user }) => {
    const [avatar, setAvatar] = useState(null);
    const [active, setActive] = useState(1);

    const [logout, setLogout] = useState(false);

    const [loadUser, setLoadUser] = useState(false);

    const {} = useLoadUserQuery(undefined, { skip: loadUser ? false : true });

    const {} = useLogoutQuery(undefined, {
        skip: !logout ? true : false,
    });

    const logoutHandler = async () => {
        setLogout(true);
        await signOut();
    };

    const [updateAvatar, { isSuccess }] = useUpdateAvatarMutation();

    const imageHandler = async (e: any) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);

        fileReader.onload = () => {
            if (fileReader.readyState === 2) {
                const avatar = fileReader.result;

                updateAvatar(avatar);
            }
        };
    };

    useEffect(() => {
        if (isSuccess) {
            setLoadUser(true);
        }
    }, [isSuccess]);

    return (
        <div className=" flex flex-col md:flex-row justify-start items-start min-h-screen ">
            {/* Sidebar */}
            <div className="w-full md:w-1/3 p-2">
                <Sidebar
                    active={active}
                    user={user}
                    avatar={avatar}
                    setActive={setActive}
                    logoutHandler={logoutHandler}
                />
            </div>

            {active === 1 && (
                <div className=" w-full md:w-2/3 rounded-lg p-6 flex flex-col justify-center items-center ">
                    <h1 className="text-3xl md:text-5xl font-semibold mb-4">
                        {user.name} Profile
                    </h1>

                    <div className="relative w-[120px] h-[120px] my-10">
                        <Image
                            src={
                                user.avatar || avatar
                                    ? user.avatar.url || avatar
                                    : defaultAvatar
                            }
                            alt="avatar"
                            width={120}
                            height={120}
                            className="w-[120px] h-[120px] cursor-pointer object-cover border-2 border-[crimson] dark:border-cyan-400 rounded-full"
                        />

                        <input
                            type="file"
                            name=""
                            id="avatar"
                            className="hidden"
                            onChange={imageHandler}
                            accept="image/png, image/jpeg, image/jpg, image/gif"
                        />

                        <label htmlFor="avatar">
                            <div className="w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
                                <AiOutlineCamera
                                    size={20}
                                    className="z-10 text-white"
                                />
                            </div>
                        </label>
                    </div>

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
            )}

            {active === 2 && <ChangePassword />}
            {/*  */}
            {/*  */}
            {/*  */}
        </div>
    );
};

export default Profile;
