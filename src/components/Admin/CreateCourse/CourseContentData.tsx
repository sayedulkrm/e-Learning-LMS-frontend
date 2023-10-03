import React, { FC } from "react";

type Props = {
    active: number;
    setActive: (active: number) => void;
    courseData: any;
    setCourseData: (courseData: any) => void;

    benifits: { title: string }[];
    setBenifits: (benifits: { title: string }[]) => void;
    preRequisites: { title: string }[];
    setPreRequisites: (preRequisites: { title: string }[]) => void;
};

const CourseContentData: FC<Props> = ({ setActive, active }) => {
    return (
        <div>
            CourseContentData
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
                    disabled={active === 4}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CourseContentData;
