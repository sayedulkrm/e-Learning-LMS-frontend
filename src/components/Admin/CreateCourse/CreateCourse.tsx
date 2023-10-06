"use client";

import React, { useEffect, useState } from "react";
import CourseInformation from "./CourseInformation";
import CourseOption from "./CourseOption";
import CourseContentData from "./CourseContentData";
import CourseData from "./CourseData";
import CoursePreview from "./CoursePreview";
import { useCreateCourseMutation } from "@/redux/features/courses/coursesApi";

import { toast } from "react-toastify";
import { redirect } from "next/navigation";

type Props = {};

const CreateCourse = (props: Props) => {
    const [createCourse, { isLoading, isSuccess, error }] =
        useCreateCourseMutation();

    const [active, setActive] = useState(0);

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

        // Format the benifits array
        const formattedBenifits = benifits.map((benifit) => ({
            title: benifit.title,
        }));

        // Format the preRequisites array

        const formattedPreRequisites = preRequisites.map((prerequisite) => ({
            title: prerequisite.title,
        }));

        // Format the courseContentData array
        const formattedCourseContentData = courseContentData.map(
            (courseContent) => ({
                title: courseContent.title,
                videoUrl: courseContent.videoUrl,
                description: courseContent.description,
                videoSection: courseContent.videoSection,
                links: courseContent.links.map((link) => ({
                    title: link.title,
                    url: link.url,
                })),

                suggestion: courseContent.suggestion,
            })
        );

        // prepare our data object

        const data = {
            name: courseInfo.name,
            description: courseInfo.description,
            price: courseInfo.price,
            estimatedPrice: courseInfo.estimatedPrice,
            tags: courseInfo.tags,
            level: courseInfo.level,
            demoUrl: courseInfo.demoUrl,
            thumbnail: courseInfo.thumbnail,
            totalVideos: courseContentData.length,
            benifits: formattedBenifits,
            preRequisites: formattedPreRequisites,
            courseData: formattedCourseContentData,
        };

        setCourseData(data);
    };

    const handleCourseCreate = async (e: any) => {
        const data = courseData;

        if (!isLoading) {
            await createCourse(data);
        }
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success("Course created successfully");
            redirect("/admin/all-courses");
        }

        if (error) {
            if ("data" in error) {
                const errorMessage = error as any;

                toast.error(errorMessage.data.message);
            }
        }
    }, [isLoading, isSuccess, error]);

    //
    //
    //
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

                {active === 3 && (
                    <CoursePreview
                        courseData={courseData}
                        active={active}
                        setActive={setActive}
                        handleCourseCreate={handleCourseCreate}
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
