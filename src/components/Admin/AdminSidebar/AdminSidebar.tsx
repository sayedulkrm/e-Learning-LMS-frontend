"use client";
import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

//
//

import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaUsers, FaVideo, FaTv, FaQuestionCircle } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import {
    MdCategory,
    MdOutlineAnalytics,
    MdOutlineSettingsSuggest,
    MdSupervisedUserCircle,
} from "react-icons/md";

import { BiBookContent, BiLogOut } from "react-icons/bi";
import { BsMicrosoftTeams, BsNewspaper } from "react-icons/bs";

import {
    TbLayoutSidebarLeftCollapse,
    TbLayoutSidebarRightCollapse,
} from "react-icons/tb";

//

type Props = {};

const AdminSidebar = (props: Props) => {
    const { user } = useSelector((state: any) => state.auth);

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="w-auto h-full">
            <Sidebar
                transitionDuration={500}
                backgroundColor="#1F2A40"
                className="!border-none "
                collapsed={collapsed}
                style={{
                    height: "100vh",
                    minHeight: "100vh",

                    overflowY: "auto",
                    scrollBehavior: "smooth",
                }}
            >
                <Menu
                    menuItemStyles={{
                        // button: ({ level, active }) => {
                        //     if (level === 0 || level === 1) {
                        //         return {
                        //             backgroundColor: active ? "red" : undefined,
                        //             color: active ? "white" : undefined,
                        //             "&:hover": {
                        //                 backgroundColor: "Highlight",
                        //                 color: "white",
                        //             },
                        //         };
                        //     }
                        // },

                        button: ({ level, active }) => {
                            return {
                                backgroundColor: "#1F2A40",
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "transparent",
                                    color: "cyan",
                                },
                            };
                        },
                    }}
                >
                    <MenuItem
                        onClick={() => setCollapsed(!collapsed)}
                        icon={
                            collapsed ? (
                                <TbLayoutSidebarRightCollapse
                                    className={"text-xl "}
                                />
                            ) : (
                                <TbLayoutSidebarLeftCollapse
                                    className={"text-xl "}
                                />
                            )
                        }
                        className="py-2 "
                    >
                        {!collapsed && (
                            <p className="text-lg text-white duration-300 pl-5 py-2 font-semibold">
                                Admin Panel
                            </p>
                        )}
                    </MenuItem>

                    {!collapsed && (
                        <div className="w-full h-full flex flex-col justify-center items-center my-8">
                            <Image
                                src={user?.avatar?.url}
                                alt={user?.name}
                                height={80}
                                width={80}
                                quality={100}
                                className="h-28 w-28 object-cover rounded-full"
                            />

                            <p className="mt-5 text-2xl font-semibold line-clamp-1 text-cyan-500 font-Josefin">
                                {user?.name}
                            </p>
                        </div>
                    )}

                    <Link href={"/admin/dashboard"}>
                        <MenuItem
                            icon={<LuLayoutDashboard className={"text-xl"} />}
                        >
                            Dashboard
                        </MenuItem>
                    </Link>

                    {/* <SubMenu
                        icon={<LuLayoutDashboard className={"text-xl"} />}
                        label="Dashboard"
                    >
                        <MenuItem className="bg-green-800">

                            Pie charts{" "}
                        </MenuItem>
                        <MenuItem className="bg-green-800">

                            Line charts{" "}
                        </MenuItem>
                    </SubMenu> */}

                    {!collapsed && (
                        <p className="text-lg text-white duration-300 pl-5 py-2 font-semibold">
                            Data
                        </p>
                    )}

                    <Link href={"/admin/users"}>
                        <MenuItem icon={<FaUsers className={"text-xl"} />}>
                            Users
                        </MenuItem>
                    </Link>
                    <Link href={"/admin/invoice"}>
                        <MenuItem
                            icon={<LiaFileInvoiceSolid className={"text-xl"} />}
                        >
                            Invoice
                        </MenuItem>
                    </Link>

                    {!collapsed && (
                        <p className="text-lg text-white duration-300 pl-5 py-2 font-semibold">
                            Content
                        </p>
                    )}

                    <Link href={"/admin/create-course"}>
                        <MenuItem icon={<FaVideo className={"text-xl"} />}>
                            Create Course
                        </MenuItem>
                    </Link>
                    <Link href={"/admin/live-course"}>
                        <MenuItem icon={<FaTv className={"text-xl"} />}>
                            Live Course
                        </MenuItem>
                    </Link>

                    {!collapsed && (
                        <p className="text-lg text-white duration-300 pl-5 py-2 font-semibold">
                            Customization
                        </p>
                    )}

                    <Link href={"/admin/hero"}>
                        <MenuItem
                            icon={<BiBookContent className={"text-xl"} />}
                        >
                            Hero
                        </MenuItem>
                    </Link>
                    <Link href={"/admin/faq"}>
                        <MenuItem
                            icon={<FaQuestionCircle className={"text-xl"} />}
                        >
                            Faq
                        </MenuItem>
                    </Link>

                    <Link href={"/admin/categories"}>
                        <MenuItem icon={<MdCategory className={"text-xl"} />}>
                            Categories
                        </MenuItem>
                    </Link>

                    {!collapsed && (
                        <p className="text-lg text-white duration-300 pl-5 py-2 font-semibold">
                            Controller
                        </p>
                    )}

                    <Link href={"/admin/manageteam"}>
                        <MenuItem
                            icon={<BsMicrosoftTeams className={"text-xl"} />}
                        >
                            Manage Team
                        </MenuItem>
                    </Link>

                    {!collapsed && (
                        <p className="text-lg text-white duration-300 pl-5 py-2 font-semibold">
                            Analytics
                        </p>
                    )}

                    <Link href={"/admin/course-analytics"}>
                        <MenuItem
                            icon={<MdOutlineAnalytics className={"text-xl"} />}
                        >
                            Course Analytics
                        </MenuItem>
                    </Link>

                    <Link href={"/admin/order-analytics"}>
                        <MenuItem icon={<BsNewspaper className={"text-xl"} />}>
                            Order Analytics
                        </MenuItem>
                    </Link>

                    <Link href={"/admin/user-analytics"}>
                        <MenuItem
                            icon={
                                <MdSupervisedUserCircle className={"text-xl"} />
                            }
                        >
                            User Analytics
                        </MenuItem>
                    </Link>

                    {/*  */}
                    {/*  */}
                    {/*  */}
                    {/*  */}

                    {!collapsed && (
                        <p className="text-lg text-white duration-300 pl-5 py-2 font-semibold">
                            Extra
                        </p>
                    )}

                    <Link href={"/admin/setting"}>
                        <MenuItem
                            icon={
                                <MdOutlineSettingsSuggest
                                    className={"text-xl"}
                                />
                            }
                        >
                            Setting
                        </MenuItem>
                    </Link>

                    <MenuItem
                        className="bg-slate-900 "
                        icon={<BiLogOut className={"text-xl"} />}
                    >
                        Logout
                    </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default AdminSidebar;
