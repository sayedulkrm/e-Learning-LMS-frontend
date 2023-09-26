"use client";
import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { LuLayoutDashboard } from "react-icons/lu";
import Link from "next/link";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useSelector } from "react-redux";
import Image from "next/image";

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
                        icon={<AiOutlineMenuUnfold className={"text-xl "} />}
                        className="py-5 "
                    >
                        {!collapsed && <p>Admin Panel</p>}
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

                    <SubMenu
                        icon={<LuLayoutDashboard className={"text-xl"} />}
                        label="Dashboard"
                    >
                        <MenuItem className="bg-green-800">
                            {" "}
                            Pie charts{" "}
                        </MenuItem>
                        <MenuItem className="bg-green-800">
                            {" "}
                            Line charts{" "}
                        </MenuItem>
                    </SubMenu>
                    <MenuItem
                        icon={<LuLayoutDashboard className={"text-xl"} />}
                    >
                        {" "}
                        Documentation{" "}
                    </MenuItem>
                    <MenuItem
                        icon={<LuLayoutDashboard className={"text-xl"} />}
                    >
                        {" "}
                        Calendar{" "}
                    </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default AdminSidebar;
