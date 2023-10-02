import React, { FC } from "react";

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
    setBenifits,
    setPreRequisites,
}) => {
    return (
        <div className="w-[80%] m-auto mt-5 block">
            <div>{/* Statrt the code from here */}</div>
        </div>
    );
};

export default CourseData;
