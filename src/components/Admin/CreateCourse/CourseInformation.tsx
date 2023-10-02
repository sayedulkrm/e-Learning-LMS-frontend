"use client";
import React, { FC, useState, FormEvent } from "react";
import { BiUpload } from "react-icons/bi";

type Props = {
    active: number;
    setActive: (active: number) => void;
    courseInfo: any;
    setCourseInfo: (courseInfo: any) => void;
};

const CourseInformation: FC<Props> = ({
    active,
    courseInfo,
    setActive,
    setCourseInfo,
}) => {
    const [dragging, setDragging] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setActive(active + 1);
    };

    const handleFileChange = (e: any) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e: any) => {
                if (reader.readyState === 2) {
                    setCourseInfo({ ...courseInfo, thumbnail: reader.result });
                }
            };

            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e: any) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e: any) => {
        e.preventDefault();
        setDragging(false);
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        setDragging(false);

        const file = e.dataTransfer.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e: any) => {
                if (reader.readyState === 2) {
                    setCourseInfo({ ...courseInfo, thumbnail: reader.result });
                }
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-[80%] m-auto mt-5 ">
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-4">
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                    >
                        Course Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={courseInfo.name}
                        onChange={(e: any) =>
                            setCourseInfo({
                                ...courseInfo,
                                name: e.target.value,
                            })
                        }
                        required
                        placeholder="Write Course Name"
                        className="w-full bg-transparent px-3 py-2 border rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium mb-2"
                    >
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        value={courseInfo.description}
                        onChange={(e: any) =>
                            setCourseInfo({
                                ...courseInfo,
                                description: e.target.value,
                            })
                        }
                        required
                        placeholder="Write Course Description"
                        className="w-full bg-transparent px-3 py-2 border rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 min-h-[100px]"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="price"
                        className="block text-sm font-medium mb-2"
                    >
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        value={courseInfo.price}
                        onChange={(e: any) =>
                            setCourseInfo({
                                ...courseInfo,
                                price: e.target.value,
                            })
                        }
                        required
                        placeholder="Enter Course Price"
                        className="w-full bg-transparent px-3 py-2 border rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 appearance-none"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="estimatedPrice"
                        className="block text-sm font-medium mb-2"
                    >
                        Estimated Price
                    </label>
                    <input
                        type="number"
                        name="estimatedPrice"
                        id="estimatedPrice"
                        value={courseInfo.estimatedPrice}
                        onChange={(e: any) =>
                            setCourseInfo({
                                ...courseInfo,
                                estimatedPrice: e.target.value,
                            })
                        }
                        required
                        placeholder="Enter Estimated Price"
                        className="w-full bg-transparent px-3 py-2 border rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="tags"
                        className="block text-sm font-medium mb-2"
                    >
                        Tags
                    </label>
                    <input
                        type="text"
                        name="tags"
                        id="tags"
                        value={courseInfo.tags}
                        onChange={(e: any) =>
                            setCourseInfo({
                                ...courseInfo,
                                tags: e.target.value,
                            })
                        }
                        required
                        placeholder="Enter Tags"
                        className="w-full bg-transparent px-3 py-2 border rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="level"
                        className="block text-sm font-medium mb-2"
                    >
                        Course Level
                    </label>
                    <input
                        type="text"
                        name="level"
                        id="level"
                        value={courseInfo.level}
                        onChange={(e: any) =>
                            setCourseInfo({
                                ...courseInfo,
                                level: e.target.value,
                            })
                        }
                        required
                        placeholder="Enter Course Level"
                        className="w-full bg-transparent px-3 py-2 border rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="demoUrl"
                        className="block text-sm font-medium mb-2"
                    >
                        Demo URL
                    </label>
                    <input
                        type="text"
                        name="demoUrl"
                        id="demoUrl"
                        value={courseInfo.demoUrl}
                        onChange={(e: any) =>
                            setCourseInfo({
                                ...courseInfo,
                                demoUrl: e.target.value,
                            })
                        }
                        required
                        placeholder="Enter Demo URL"
                        className="w-full bg-transparent px-3 py-2 border rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                    />
                </div>

                <div className="my-4 w-full">
                    <input
                        type="file"
                        accept="image/*"
                        id="file"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    <label
                        htmlFor="file"
                        className="cursor-pointer block text-sm font-medium mb-2 w-full h-full min-h-[200px] text-cyan-500 hover:text-blue-700"
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        {courseInfo.thumbnail ? (
                            <img
                                src={courseInfo.thumbnail}
                                alt="edumastery"
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <span
                                className={` w-full h-full min-h-[200px] flex justify-center items-center bg-transparent px-2 py-1 rounded-lg ${
                                    dragging ? "bg-cyan-200" : "bg-transparent"
                                } hover:bg-cyan-200 transition duration-300 ease-in-out border text-2xl`}
                            >
                                <BiUpload className="inline-block align-middle mr-2 text-4xl " />
                                Upload Thumbnail
                            </span>
                        )}
                    </label>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="px-4 py-2 w-full my-5 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 focus:ring-cyan-500 focus:border-cyan-500"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CourseInformation;
