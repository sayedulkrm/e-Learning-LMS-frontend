"use client";
import AdminSidebar from "@/components/Admin/AdminSidebar/AdminSidebar";
import ProtectedRoute from "@/routes/useProtected";
import Heading from "@/utils/Heading";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
    return (
        <div>
            <ProtectedRoute sendTo="/profile">
                <Heading
                    title="EduMastery | Admin Panel"
                    description="A administration panel"
                    keywords="programming, education, programming education,react,nextjs,next"
                />

                <div className="flex flex-col md:flex-row h-full min-h-screen">
                    {/* <div className="1500px:w-[16%] md:w-1/5 w-full  h-screen p-5"> */}
                    <AdminSidebar />
                    {/* </div> */}

                    <div className=" w-full  bg-gray-700 h-screen p-5">
                        dashboard
                    </div>
                </div>
            </ProtectedRoute>
        </div>
    );
};

export default Dashboard;
