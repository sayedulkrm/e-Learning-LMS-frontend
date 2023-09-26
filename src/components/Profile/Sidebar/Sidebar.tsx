import Image from "next/image";
import React from "react";
import { RiLockPasswordLine, RiBookLine } from "react-icons/ri"; // Import React Icons
import { LuLayoutDashboard } from "react-icons/lu";
import defaultAvatar from "../../../../public/assets/rabbit.png";
import Link from "next/link";

type Props = {
    user: any; // Pass the user data as a prop
    active: number;
    avatar: string | null;
    setActive: (active: number) => void;
    logoutHandler: any;
};

const Sidebar = ({ user, active, avatar, logoutHandler, setActive }: Props) => {
    return (
        <div className="w-full border rounded-md p-2  flex flex-col justify-start items-center mt-5 overflow-x-hidden ">
            <div
                className={`w-full flex font-Poppins items-center justify-start px-3 py-4 cursor-pointer rounded-md gap-5 ${
                    active === 1
                        ? "bg-rose-100 dark:bg-slate-800"
                        : "bg-transparent"
                }`}
                onClick={() => setActive(1)}
            >
                <Image
                    src={
                        user.avatar || avatar
                            ? user.avatar.url || avatar
                            : defaultAvatar
                    }
                    alt="avatar"
                    width={20}
                    height={20}
                    className="rounded-full h-10 w-10 object-cover"
                />
                <p className="text-xl font-bold font-Josefin">My Account</p>
            </div>
            <div
                className={`w-full flex items-center justify-start px-3 py-4 cursor-pointer rounded-md ${
                    active === 2
                        ? "bg-rose-100 dark:bg-slate-800"
                        : "bg-transparent"
                }`}
                onClick={() => setActive(2)}
            >
                <RiLockPasswordLine className="text-2xl mr-2" /> Change Password
            </div>

            <div
                className={`w-full flex items-center justify-start px-3 py-4 cursor-pointer rounded-md ${
                    active === 3
                        ? "bg-rose-100 dark:bg-slate-800"
                        : "bg-transparent"
                }`}
                onClick={() => setActive(3)}
            >
                <RiBookLine className="text-2xl mr-2" /> Enrolled Courses
            </div>

            {user?.role === "admin" && (
                <Link
                    className={`w-full flex items-center justify-start px-3 py-4 cursor-pointer rounded-md ${
                        active === 6
                            ? "bg-rose-100 dark:bg-slate-800"
                            : "bg-transparent"
                    }`}
                    href={"/admin/dashboard"}
                >
                    <LuLayoutDashboard className="text-2xl mr-2" /> Dashboard
                </Link>
            )}

            <button
                className="w-full flex items-center justify-center px-3 py-4 cursor-pointer rounded-md hover:bg-red-300 duration-200 text-xl font-bold hover:text-white mt-3 "
                onClick={logoutHandler}
            >
                Logout
            </button>
        </div>
    );
};

export default Sidebar;
