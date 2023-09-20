"use client";

import Link from "next/link";
import React, { FC, useState } from "react";
import NavItems from "./NavItems";
import ThemeSwitcher from "./ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number;
};

const Header: FC<Props> = ({ activeItem, setOpen }: Props) => {
    const [active, setActive] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

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

                            <HiOutlineUserCircle
                                className="cursor-pointer text-2xl "
                                onClick={() => setOpen(true)}
                            />

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
        </header>
    );
};

export default Header;
