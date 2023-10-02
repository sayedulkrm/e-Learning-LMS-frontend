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

const CourseContentData: FC<Props> = ({}) => {
    return <div>CourseContentData</div>;
};

export default CourseContentData;
