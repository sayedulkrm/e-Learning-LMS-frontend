"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header/Header";
import ProtectedRoute from "@/routes/useProtected";
import Heading from "@/utils/Heading";
import { useSelector } from "react-redux";
import Profile from "@/components/Profile/Profile";

type Props = {};

const Page: React.FC<Props> = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [route, setRoute] = useState("Login");
    const { user } = useSelector((state: any) => state.auth);

    return (
        <ProtectedRoute sendTo="/">
            <div className="w-full h-full">
                <Heading
                    title={`${user.name} Profile | EduMastery`}
                    description="EduMastery: Your Path to Knowledge Excellence. Explore a world of online learning with our expertly curated courses in diverse fields. Master new skills and unlock your potential today!"
                    keywords="Online Education,Learning Platform,Knowledge Mastery,Skill Development,Online Courses, Educational Resources, E-Learning Hub, Expert Instructors,Learning Opportunities,Knowledge Excellence, Self-Paced Learning, Course Catalog, Personal Growth, Professional Development, Diverse Curriculum   "
                />

                <Header
                    open={open}
                    setOpen={setOpen}
                    activeItem={activeItem}
                    setRoute={setRoute}
                    route={route}
                />
                <div className="w-full h-full max-w-[1350px] m-auto">
                    <Profile user={user} />
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default Page;
