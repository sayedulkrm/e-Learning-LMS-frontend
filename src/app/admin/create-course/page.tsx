"use client";

import AdminHeader from "@/components/Admin/AdminHeader/AdminHeader";
import AdminSidebar from "@/components/Admin/AdminSidebar/AdminSidebar";
import CreateCourse from "@/components/Admin/CreateCourse/CreateCourse";
import ProtectedRoute from "@/routes/useProtected";
import Heading from "@/utils/Heading";
import React from "react";

type Props = {};

const page = (props: Props) => {
    return (
        <div>
            <ProtectedRoute sendTo="/profile" adminRoute={true}>
                <div className="flex h-full min-h-screen">
                    {/* <div className="1500px:w-[16%] md:w-1/5 w-full  h-screen p-5"> */}
                    <AdminSidebar />
                    {/* </div> */}

                    <div className=" w-full  h-full">
                        <AdminHeader />
                        <CreateCourse />
                    </div>
                </div>
            </ProtectedRoute>
        </div>
    );
};

export default page;
