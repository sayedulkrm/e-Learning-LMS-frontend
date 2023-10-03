"use client";

import React, { FC } from "react";

import { RiAddCircleFill } from "react-icons/ri";

type Props = {
    active: number;
    setActive: (active: number) => void;

    benifits: { title: string }[];
    setBenifits: (benifits: { title: string }[]) => void;
    preRequisites: { title: string }[];
    setPreRequisites: (preRequisites: { title: string }[]) => void;
};

const CourseData: FC<Props> = ({
    active,
    setActive,
    benifits,
    preRequisites,
    setBenifits,
    setPreRequisites,
}) => {
    const handleBenifitChange = (i: number, value: any) => {
        const updatedBenifits = [...benifits];
        updatedBenifits[i].title = value;
        setBenifits(updatedBenifits);
    };

    const handleAddBenifits = () => {
        setBenifits([...benifits, { title: "" }]);
    };

    const handleprerequisitesChange = (i: number, value: any) => {
        const updatedPreRequisites = [...preRequisites];
        updatedPreRequisites[i].title = value;
        setPreRequisites(updatedPreRequisites);
    };

    const handleAddPrerequisites = () => {
        setPreRequisites([...preRequisites, { title: "" }]);
    };

    return (
        <div className="w-[80%] m-auto mt-5 p-4 flex flex-col gap-5">
            <div>
                <label htmlFor="" className="text-2xl font-bold text-cyan-600">
                    What are the benefits for students in this course?
                </label>

                <br />
                {benifits?.map((item: any, i: number) => (
                    <div key={i} className="mt-4">
                        <input
                            type="text"
                            name="Benefit"
                            placeholder="You will be able to build a full-stack web application"
                            required
                            value={item.title}
                            onChange={(e) =>
                                handleBenifitChange(i, e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-md border border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-transparent"
                        />
                    </div>
                ))}

                <button
                    className="mt-4 px-4 py-2 text-cyan-600 bg-cyan-200 rounded-lg hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    onClick={handleAddBenifits}
                >
                    <span className="text-3xl">
                        <RiAddCircleFill />
                    </span>
                </button>
            </div>

            <div>
                <label
                    htmlFor=""
                    className="text-2xl font-bold text-cyan-600 mt-5"
                >
                    What are the prerequisites for students in this course?
                </label>

                <br />
                {preRequisites?.map((item: any, i: number) => (
                    <div key={i} className="mt-4">
                        <input
                            type="text"
                            name="prerequisites"
                            placeholder="You need a basic knowledge of MERN"
                            required
                            value={item.title}
                            onChange={(e) =>
                                handleprerequisitesChange(i, e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-md border border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-transparent"
                        />
                    </div>
                ))}

                <button
                    className="mt-4 px-4 py-2 text-cyan-600 bg-cyan-200 rounded-lg hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    onClick={handleAddPrerequisites}
                >
                    <span className="text-3xl">
                        <RiAddCircleFill />
                    </span>
                </button>
            </div>

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
                    onClick={() => setActive(active + 1)}
                    disabled={active === 3}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CourseData;
