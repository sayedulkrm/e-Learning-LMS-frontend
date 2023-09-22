"use client";

import React, { FC, useState } from "react";
import Header from "@/components/layout/Header/Header";
import Heading from "@/utils/Heading";
import Hero from "@/components/utils/Hero/Hero";

// EduMastery

interface Props {}

const Page: FC<Props> = () => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [route, setRoute] = useState("Login");

    return (
        <div className="w-full h-full">
            <Heading
                title="EduMastery"
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
                <Hero />
            </div>
        </div>
    );
};

export default Page;
