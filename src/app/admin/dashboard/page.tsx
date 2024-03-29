"use client";
import AdminHeader from "@/components/Admin/AdminHeader/AdminHeader";
import AdminSidebar from "@/components/Admin/AdminSidebar/AdminSidebar";
import DashboardHero from "@/components/Admin/Dashboard/DashboardHero/DashboardHero";
import ProtectedRoute from "@/routes/useProtected";
import Heading from "@/utils/Heading";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
    return (
        <div>
            <ProtectedRoute sendTo="/profile" adminRoute={true}>
                <Heading
                    title="EduMastery | Admin Panel"
                    description="A administration panel"
                    keywords="programming, education, programming education,react,nextjs,next"
                />

                <div className="flex h-full min-h-screen">
                    {/* <div className="1500px:w-[16%] md:w-1/5 w-full  h-screen p-5"> */}
                    <AdminSidebar />
                    {/* </div> */}

                    <div className=" w-full  h-full">
                        <AdminHeader />
                        <DashboardHero />
                    </div>
                </div>
            </ProtectedRoute>
        </div>
    );
};

export default Dashboard;
