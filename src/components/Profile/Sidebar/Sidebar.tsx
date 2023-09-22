import Image from "next/image";
import React from "react";
import { RiLockPasswordLine, RiBookLine } from "react-icons/ri"; // Import React Icons
import defaultAvatar from "../../../../public/assets/rabbit.png";

type Props = {
    user: any; // Pass the user data as a prop
    active: number;
    avatar: string | null;
    setActive: (active: number) => void;
    logoutHandler: any;
};

const Sidebar = ({ user, active, avatar, logoutHandler, setActive }: Props) => {
    return (
        <div className="w-full flex flex-col justify-start items-center m-5 overflow-x-hidden ">
            <div
                className={`w-full flex items-center justify-center px-3 py-4 cursor-pointer rounded-md ${
                    active === 1
                        ? "bg-rose-100 dark:bg-slate-800"
                        : "bg-transparent"
                }`}
                onClick={() => setActive(1)}
            >
                <Image
                    src={
                        user.avatar || avatar
                            ? user.avatar || avatar
                            : defaultAvatar
                    }
                    alt="avatar"
                    width={100}
                    height={100}
                    className="rounded-full"
                />
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
            <div
                className="w-full flex items-center justify-start px-3 py-4 cursor-pointer rounded-md"
                onClick={logoutHandler}
            >
                Logout
            </div>
        </div>
    );
};

export default Sidebar;
