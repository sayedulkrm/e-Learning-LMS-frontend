"use client";

import { style } from "@/styles/style";
import React, { FC, useState, FormEvent } from "react";
import {
    AiOutlineDelete,
    AiOutlinePlus,
    AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsLink45Deg, BsPencil } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { toast } from "react-toastify";

type Props = {
    active: number;
    setActive: (active: number) => void;
    courseContentData: any;
    setCourseContentData: (courseContentData: any) => void;
    handleSubmit: any;
};

const CourseContentData: FC<Props> = ({
    setActive,
    active,
    setCourseContentData,
    courseContentData,
    handleSubmit: handleCourseSubmit,
}) => {
    const [isCollapsed, setIsCollapsed] = useState(
        Array(courseContentData.length).fill(false)
    );

    const [activeSection, setActiveSection] = useState(1);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleCollapseToggle = (i: number) => {
        const updatedCollapse = [...isCollapsed];

        updatedCollapse[i] = !updatedCollapse[i];
        setIsCollapsed(updatedCollapse);
    };

    const handleRemoveLink = (i: number, linkIndex: number) => {
        const updatedData = [...courseContentData];
        updatedData[i].links.splice(linkIndex, 1);
        setCourseContentData(updatedData);
    };

    const handleAddLink = (i: number) => {
        const updatedData = [...courseContentData];
        updatedData[i].links.push({ title: "", url: "" });
        setCourseContentData(updatedData);
    };

    const newContentHandler = (item: any) => {
        if (
            item?.title === "" ||
            item?.description === "" ||
            item.videoUrl === "" ||
            item.links[0].title === "" ||
            item.links[0].url === ""
        ) {
            toast.error("Please fill all the fields");
        } else {
            let newVideoSections = "";

            if (courseContentData.length > 0) {
                const lastVideoSection =
                    courseContentData[courseContentData.length - 1]
                        .videoSection;

                // use the last video section if available else default use user input

                if (lastVideoSection) {
                    newVideoSections = lastVideoSection;
                }
            }

            const newContent = {
                videoUrl: "",
                title: "",
                description: "",
                videoSection: newVideoSections,
                links: [{ title: "", url: "" }],
            };

            setCourseContentData([...courseContentData, newContent]);
        }
    };

    const addNewSection = () => {
        if (
            courseContentData[courseContentData.length - 1].title === "" ||
            courseContentData[courseContentData.length - 1].description ===
                "" ||
            courseContentData[courseContentData.length - 1].videoUrl === "" ||
            courseContentData[courseContentData.length - 1].links[0].title ===
                "" ||
            courseContentData[courseContentData.length - 1].links[0].url === ""
        ) {
            toast.error("Please fill all the fields");
        } else {
            setActiveSection(activeSection + 1);

            const newContent = {
                videoUrl: "",
                title: "",
                description: "",
                videoSection: `Untitled Section ${activeSection}`,
                links: [{ title: "", url: "" }],
            };

            setCourseContentData([...courseContentData, newContent]);
        }
    };

    const handleOptions = () => {
        if (
            courseContentData[courseContentData.length - 1].title === "" ||
            courseContentData[courseContentData.length - 1].description ===
                "" ||
            courseContentData[courseContentData.length - 1].videoUrl === "" ||
            courseContentData[courseContentData.length - 1].links[0].title ===
                "" ||
            courseContentData[courseContentData.length - 1].links[0].url === ""
        ) {
            toast.error("Sections cannot be empty");
        } else {
            setActive(active + 1);
            handleCourseSubmit();
        }
    };

    //
    //
    //

    return (
        <div className="w-[80%] m-auto mt-20 p-3">
            <form onSubmit={handleSubmit}>
                {courseContentData?.map((item: any, i: number) => {
                    const showSectionInput =
                        i === 0 ||
                        item.videoSection !==
                            courseContentData[i - 1].videoSection;

                    return (
                        <>
                            <div
                                className={`w-full bg-[#cdc8c817] p-4 ${
                                    showSectionInput ? "mt-10" : "mb-0"
                                }`}
                            >
                                {showSectionInput && (
                                    <>
                                        <div className="flex w-full items-center ">
                                            <input
                                                type="text"
                                                className={`text-2xl ${
                                                    item.videoSection ===
                                                    "Untitled Section"
                                                        ? "w-[200px]"
                                                        : "w-min"
                                                } font-Poppins cursor-pointer bg-transparent`}
                                                value={item.videoSection}
                                                onChange={(e) => {
                                                    const updatedData = [
                                                        ...courseContentData,
                                                    ];
                                                    updatedData[
                                                        i
                                                    ].videoSection =
                                                        e.target.value;
                                                    setCourseContentData(
                                                        updatedData
                                                    );
                                                }}
                                            />

                                            <BsPencil className="cursor-pointer text-xl" />
                                        </div>
                                    </>
                                )}

                                <div className="flex w-full items-center justify-between my-8">
                                    {isCollapsed[i] ? (
                                        <>
                                            {item.title ? (
                                                <p className="font-Poppins">
                                                    {i + 1}.{item.title}
                                                </p>
                                            ) : (
                                                <></>
                                            )}
                                        </>
                                    ) : (
                                        <></>
                                    )}

                                    {/* Arrow Button for collapsing video section  */}

                                    <div className="flex w-full items-center justify-end gap-5">
                                        <button
                                            className={`text-2xl rounded-md shadow-sm text-white mr-2 p-2 bg-cyan-500 hover:bg-cyan-700 ${
                                                i > 0
                                                    ? "cursor-pointer"
                                                    : "cursor-no-drop"
                                            }`}
                                            onClick={() => {
                                                if (i > 0) {
                                                    const updatedData = [
                                                        ...courseContentData,
                                                    ];
                                                    updatedData.splice(i, 1);
                                                    setCourseContentData(
                                                        updatedData
                                                    );
                                                }
                                            }}
                                        >
                                            <AiOutlineDelete />
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleCollapseToggle(i)
                                            }
                                            className="text-2xl p-2 bg-cyan-500 hover:bg-cyan-700 rounded-md shadow-sm"
                                        >
                                            <MdOutlineKeyboardArrowDown
                                                style={{
                                                    transform: isCollapsed[i]
                                                        ? "rotate(180deg)"
                                                        : "rotate(0deg)",
                                                }}
                                            />
                                        </button>
                                    </div>
                                </div>

                                {!isCollapsed[i] && (
                                    <>
                                        <div className="my-3">
                                            <label
                                                htmlFor=""
                                                className={style.title}
                                            >
                                                Video Title
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Project Plan..."
                                                className={style.input}
                                                value={item.title}
                                                onChange={(e) => {
                                                    const updatedData = [
                                                        ...courseContentData,
                                                    ];
                                                    updatedData[i].title =
                                                        e.target.value;
                                                    setCourseContentData(
                                                        updatedData
                                                    );
                                                }}
                                            />
                                        </div>

                                        <div className="my-3">
                                            <label
                                                htmlFor=""
                                                className={style.title}
                                            >
                                                Video Url
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Video URL..."
                                                className={style.input}
                                                value={item.videoUrl}
                                                onChange={(e) => {
                                                    const updatedData = [
                                                        ...courseContentData,
                                                    ];
                                                    updatedData[i].videoUrl =
                                                        e.target.value;
                                                    setCourseContentData(
                                                        updatedData
                                                    );
                                                }}
                                            />
                                        </div>

                                        <div className="my-3">
                                            <label
                                                htmlFor=""
                                                className={style.title}
                                            >
                                                Video Description
                                            </label>
                                            <textarea
                                                placeholder="Description..."
                                                className={`${style.input} min-h-[100px] `}
                                                value={item.description}
                                                rows={8}
                                                cols={30}
                                                onChange={(e) => {
                                                    const updatedData = [
                                                        ...courseContentData,
                                                    ];
                                                    updatedData[i].description =
                                                        e.target.value;
                                                    setCourseContentData(
                                                        updatedData
                                                    );
                                                }}
                                            />
                                            <br />
                                        </div>

                                        {item?.links.map(
                                            (link: any, linkIndex: number) => (
                                                <div className="mb-3 block">
                                                    <div className="w-full flex items-center justify-between">
                                                        <label
                                                            htmlFor=""
                                                            className={
                                                                style.title
                                                            }
                                                        >
                                                            Link {linkIndex + 1}
                                                        </label>

                                                        <button
                                                            onClick={() =>
                                                                linkIndex === 0
                                                                    ? null
                                                                    : handleRemoveLink(
                                                                          i,
                                                                          linkIndex
                                                                      )
                                                            }
                                                            className={`text-2xl p-2 text-white bg-cyan-500 hover:bg-cyan-700 rounded-md shadow-sm ${
                                                                linkIndex === 0
                                                                    ? "cursor-no-drop"
                                                                    : "cursor-pointer"
                                                            } `}
                                                        >
                                                            <AiOutlineDelete />
                                                        </button>
                                                    </div>

                                                    <input
                                                        type="text"
                                                        placeholder="Src code url..."
                                                        className={style.input}
                                                        value={link.title}
                                                        onChange={(e) => {
                                                            const updatedData =
                                                                [
                                                                    ...courseContentData,
                                                                ];
                                                            updatedData[
                                                                i
                                                            ].links[
                                                                linkIndex
                                                            ].title =
                                                                e.target.value;
                                                            setCourseContentData(
                                                                updatedData
                                                            );
                                                        }}
                                                    />

                                                    <input
                                                        type="url"
                                                        placeholder="Live Link..."
                                                        className={style.input}
                                                        value={link.url}
                                                        onChange={(e) => {
                                                            const updatedData =
                                                                [
                                                                    ...courseContentData,
                                                                ];
                                                            updatedData[
                                                                i
                                                            ].links[
                                                                linkIndex
                                                            ].url =
                                                                e.target.value;
                                                            setCourseContentData(
                                                                updatedData
                                                            );
                                                        }}
                                                    />
                                                </div>
                                            )
                                        )}

                                        <br />
                                        <div className="inline-block mb-4">
                                            <p
                                                className="flex items-center text-xl cursor-pointer p-2"
                                                onClick={() => handleAddLink(i)}
                                            >
                                                <BsLink45Deg className="mr-2" />{" "}
                                                Add Link
                                            </p>
                                        </div>
                                    </>
                                )}
                                <br />

                                {/* add new content  */}
                                {i === courseContentData.length - 1 && (
                                    <div>
                                        <p
                                            className="flex items-center text-lg cursor-pointer"
                                            onClick={(e: any) =>
                                                newContentHandler(item)
                                            }
                                        >
                                            <AiOutlinePlusCircle className="mr-2" />{" "}
                                            Add new content
                                        </p>
                                    </div>
                                )}
                            </div>
                        </>
                    );
                })}
                <br />
                <div
                    className="flex items-center text-xl cursor-pointer"
                    onClick={() => addNewSection()}
                >
                    <AiOutlinePlusCircle className="mr-2" /> Add new section
                </div>
            </form>
            <br />

            <div className="w-full flex items-center justify-center gap-5 my-5">
                <button
                    className="py-1 px-3 text-xl text-white rounded-md shadow-lg bg-cyan-500 hover:bg-cyan-700 duration-200"
                    onClick={() => setActive(active - 1)}
                    disabled={active === 1}
                >
                    Prev
                </button>

                <button
                    className="py-1 px-3 text-xl text-white rounded-md shadow-lg bg-cyan-500 hover:bg-cyan-700 duration-200"
                    onClick={() => handleOptions()}
                    disabled={active === 4}
                >
                    Next
                </button>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
};

export default CourseContentData;
