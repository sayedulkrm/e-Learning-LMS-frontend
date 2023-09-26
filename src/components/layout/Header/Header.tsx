"use client";

import Link from "next/link";
import React, { FC, useState, useEffect } from "react";
import NavItems from "./NavItems";
import ThemeSwitcher from "./ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import CustomModal from "../../utils/Modal/CustomModal";
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";
import Verification from "@/components/Auth/Verification";
import { useSelector } from "react-redux";
import Image from "next/image";
import avatar from "../../../../public/assets/rabbit.png";
import { useSession } from "next-auth/react";
import {
    useLogoutQuery,
    useSocialAuthMutation,
} from "@/redux/features/auth/authApi";
import { toast } from "react-toastify";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number;
    route: string;
    setRoute: (route: string) => void;
};

const Header: FC<Props> = ({
    activeItem,
    setOpen,
    route,
    open,
    setRoute,
}: Props) => {
    const [active, setActive] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

    const { user } = useSelector((state: any) => state.auth);

    const { data } = useSession();

    const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();

    const [logout, setLogout] = useState(false);

    const {} = useLogoutQuery(undefined, {
        skip: !logout ? true : false,
    });

    useEffect(() => {
        if (!user) {
            if (data) {
                socialAuth({
                    email: data?.user?.email,
                    name: data?.user?.name,
                    avatar: data?.user?.image,
                });
            }
        }

        if (data === null) {
            if (isSuccess) {
                toast.success("Login successfull");
            }
        }

        if (data === null) {
            setLogout(true);
        }
    }, [user, socialAuth, data, isSuccess]);

    const handleClose = (e: any) => {
        if (e.target.id === "screen") {
            {
                setOpenSidebar(false);
            }
        }
    };

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                setActive(true);
            } else {
                setActive(false);
            }
        });
    }

    return (
        <header className="w-full relative">
            <div
                className={`${
                    active
                        ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
                        : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
                }`}
            >
                <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
                    <div className="w-full h-[80px] flex items-center justify-between p-3">
                        <div>
                            <Link
                                href={"/"}
                                className={`text-[25px] font-Poppins font-bold text-black dark:text-white cursor-pointer`}
                            >
                                EduMastery
                            </Link>
                        </div>

                        <nav className="flex items-center">
                            <NavItems
                                activeItem={activeItem}
                                isMobile={false}
                            />
                            <ThemeSwitcher />

                            {user ? (
                                <Link href={"/profile"}>
                                    <Image
                                        src={
                                            user.avatar
                                                ? user.avatar.url
                                                : avatar
                                        }
                                        alt={user.name ? user.name : "user"}
                                        height={30}
                                        width={30}
                                        className={`rounded-full h-10 w-10 object-cover ${
                                            activeItem === 5
                                                ? "border-2 border-[crimson] dark:border-cyan-500"
                                                : ""
                                        }`}
                                    />
                                </Link>
                            ) : (
                                <HiOutlineUserCircle
                                    className="cursor-pointer text-2xl "
                                    onClick={() => setOpen(true)}
                                />
                            )}

                            {/* For Mobile */}
                            <div className="800px:hidden">
                                <HiOutlineMenuAlt3
                                    onClick={() => setOpenSidebar(true)}
                                    className="cursor-pointer text-2xl ml-4 "
                                />
                            </div>
                        </nav>
                    </div>
                </div>

                {/* mobile sidebar */}
                {openSidebar && (
                    <div
                        className="fixed w-full h-screen top-0 left-0 z-[9999] dark:bg-[unset] bg-[#00000024] "
                        onClick={handleClose}
                        id="screen"
                    >
                        <div className="w-[70%] fixed z-[99999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
                            <NavItems activeItem={activeItem} isMobile={true} />
                            <p className="text-lg font-semibold font-Josefin w-full text-center mt-5">
                                &copy; 2023 EduMastery. <br />
                                All Rights Reserved.
                            </p>
                        </div>
                    </div>
                )}
            </div>
            {route === "Register" && (
                <>
                    {open && (
                        <CustomModal
                            open={open}
                            setOpen={setOpen}
                            setRoute={setRoute}
                            activeItem={activeItem}
                            component={Register}
                        />
                    )}
                </>
            )}

            {route === "Login" && (
                <>
                    {open && (
                        <CustomModal
                            open={open}
                            setOpen={setOpen}
                            setRoute={setRoute}
                            activeItem={activeItem}
                            component={Login}
                        />
                    )}
                </>
            )}

            {route === "Verification" && (
                <>
                    {open && (
                        <CustomModal
                            open={open}
                            setOpen={setOpen}
                            setRoute={setRoute}
                            activeItem={activeItem}
                            component={Verification}
                        />
                    )}
                </>
            )}
        </header>
    );
};

export default Header;
