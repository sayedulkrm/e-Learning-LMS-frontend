"use client";

import React, { useState } from "react";
import CourseInformation from "./CourseInformation";
import CourseOption from "./CourseOption";
import CourseContentData from "./CourseContentData";
import CourseData from "./CourseData";

type Props = {};

const CreateCourse = (props: Props) => {
    const [active, setActive] = useState(2);

    const [courseInfo, setCourseInfo] = useState({
        name: "",
        description: "",
        price: "",
        estimatedPrice: "",
        tags: "",
        level: "",
        demoUrl: "",
        thumbnail: "",
    });

    const [benifits, setBenifits] = useState([{ title: "" }]);
    const [preRequisites, setPreRequisites] = useState([{ title: "" }]);

    const [courseContentData, setCourseContentData] = useState([
        {
            videoUrl: "",
            title: "",
            description: "",
            videoSection: "Untitled Section",
            links: [
                {
                    title: "",
                    url: "",
                },
            ],
            suggestion: "",
        },
    ]);

    const [courseData, setCourseData] = useState({});

    const handleSubmit = async () => {
        console.log("submit");
    };

    return (
        <div className="w-full h-full flex  p-2">
            <div className="w-[80%] ">
                {active === 0 && (
                    <CourseInformation
                        courseInfo={courseInfo}
                        setCourseInfo={setCourseInfo}
                        active={active}
                        setActive={setActive}
                    />
                )}

                {active === 1 && (
                    <CourseData
                        benifits={benifits}
                        setBenifits={setBenifits}
                        preRequisites={preRequisites}
                        setPreRequisites={setPreRequisites}
                        active={active}
                        setActive={setActive}
                    />
                )}

                {active === 2 && (
                    <CourseContentData
                        courseContentData={courseContentData}
                        setCourseContentData={setCourseContentData}
                        active={active}
                        setActive={setActive}
                        handleSubmit={handleSubmit}
                    />
                )}
            </div>

            <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0 ">
                <CourseOption active={active} setActive={setActive} />
            </div>
        </div>
    );
};

export default CreateCourse;
