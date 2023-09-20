import Link from "next/link";
import React, { FC } from "react";

const navItemsData = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "Courses",
        url: "/courses",
    },
    {
        name: "About",
        url: "/about",
    },
    {
        name: "Policy",
        url: "/policy",
    },
    {
        name: "FAQ",
        url: "/faq",
    },
];

type Props = {
    activeItem: number;
    isMobile: boolean;
};

const NavItems: FC<Props> = ({ activeItem, isMobile }) => {
    return (
        <>
            <div className="hidden 800px:flex">
                {navItemsData.map((item, index) => (
                    <Link
                        key={index}
                        href={item.url}
                        passHref
                        className={`mx-4 font-semibold font-Josefin hover:text-[crimson] dark:hover:text-[#37a39a] duration-200 ${
                            activeItem === index
                                ? "text-[crimson] dark:text-[#37a39a]"
                                : ""
                        }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            {isMobile && (
                <div className="800px:hidden mt-5">
                    <div className="flex flex-col gap-5 w-full justify-start py-6">
                        {navItemsData.map((item, index) => (
                            <Link
                                key={index}
                                href={item.url}
                                passHref
                                className={`mx-4 font-semibold font-Josefin hover:text-[crimson] dark:hover:text-[#37a39a] duration-200 text-2xl ${
                                    activeItem === index
                                        ? "text-[crimson] dark:text-[#37a39a]"
                                        : ""
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default NavItems;
