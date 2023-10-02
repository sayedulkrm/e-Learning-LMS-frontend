import React, { FC } from "react";

import { IoMdCheckmark } from "react-icons/io";

type Props = {
    active: number;
    setActive: (active: number) => void;
};

const CourseOption: FC<Props> = ({ active, setActive }) => {
    const options = [
        "Course Information",
        "Course Options",
        "Course Content",
        "Course Preview",
    ];

    return (
        <div>
            {options.map((option: any, index: number) => (
                <div key={index} className="w-full flex py-5">
                    <div
                        className={`w-[35px] h-[35px] rounded-full flex justify-center items-center ${
                            active + 1 > index ? "bg-blue-500" : "bg-[#384766]"
                        } relative`}
                    >
                        <IoMdCheckmark className="text-xl text-white" />
                        {index !== options.length - 1 && (
                            <div
                                className={`absolute h-[30px] w-1 ${
                                    active + 1 > index
                                        ? "bg-blue-500"
                                        : "bg-[#384766]"
                                } bottom-[-100%]`}
                            ></div>
                        )}
                    </div>
                    <h5
                        className={`pl-3 ${
                            active === index
                                ? "text-black dark:text-white"
                                : "dark:text-white text-black"
                        } text-xl `}
                    >
                        {option}
                    </h5>
                </div>
            ))}
        </div>
    );
};

export default CourseOption;
