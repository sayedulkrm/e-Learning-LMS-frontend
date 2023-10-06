import CoursePlayer from "@/components/utils/CoursePlayer/CoursePlayer";
import Ratings from "@/components/utils/Ratings/Ratings";
import { style } from "@/styles/style";
import React, { FC } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

type Props = {
    courseData: any;
    active: number;
    setActive: (active: number) => void;
    handleCourseCreate: any;
};

const CoursePreview: FC<Props> = ({
    courseData,
    active,
    setActive,
    handleCourseCreate,
}) => {
    console.log(courseData);

    const discountPercentage =
        ((courseData?.estimatedPrice - courseData?.price) /
            courseData?.estimatedPrice) *
        100;

    const discountPercentagePrice = discountPercentage.toFixed(0);

    const createCourse = () => {
        handleCourseCreate();
    };

    return (
        <div className="w-[90%] m-auto py-5 my-5">
            <div className="w-full relative">
                <div className="w-full mt-10 min-h-[300px]">
                    <CoursePlayer
                        videoUrl={courseData?.demoUrl}
                        title={courseData?.title}
                    />
                </div>

                <div className="flex items-center">
                    <h1 className="pt-5 text-xl">
                        {courseData?.price === 0
                            ? "Free"
                            : courseData?.price + "$"}
                    </h1>

                    <h5 className="pl-3 text-xl mt-2 line-through opacity-80">
                        {courseData?.estimatedPrice}$
                    </h5>

                    <h4 className="pl-5 pt-4 text-xl">
                        {discountPercentagePrice}% Off
                    </h4>
                </div>

                <div className="flex items-center">
                    <div
                        className={`${style.button}  my-3 font-Poppins !bg-[crimson] cursor-not-allowed`}
                    >
                        Buy Now {courseData?.price}$
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Discount code..."
                        className={`${style.input}`}
                    />

                    <div
                        className={`${style.button} my-3 font-Poppins !bg-[crimson] cursor-not-allowed`}
                    >
                        Apply
                    </div>
                </div>

                <p className="my-1 text-sm"># Source Code includded</p>
                <p className="my-1 text-sm"># Full Lifetime Access</p>
                <p className="my-1 text-sm"># Premium Support</p>
            </div>

            <div className="w-full">
                <div className="w-full mt-5">
                    <h1 className="text-xl font-Poppins font-bold">
                        {courseData?.name}
                    </h1>
                    <div className="flex items-center justify-between my-2 space-x-2">
                        <div className="flex items-center">
                            <Ratings rating={0} />
                            <h5>0 Reviews</h5>
                        </div>
                        <h5>0 Student</h5>
                    </div>
                    <br />

                    <h1 className="text-xl font-Poppins font-bold">
                        What you will learn from this course?
                    </h1>
                </div>
                {courseData?.benifits?.map((benefit: any, index: number) => (
                    <div className="w-full flex items-center my-2 " key={index}>
                        <div className="w-[10px] mr-1">
                            <IoMdCheckmarkCircleOutline className="text-cyan-500 text-lg" />
                        </div>
                        <p className="pl-2 text-xl">{benefit.title}</p>
                    </div>
                ))}

                <br />
                <br />

                {/* Course Prerequisites */}
                <div className="w-full mb-5">
                    <h1 className="text-xl font-Poppins font-bold">
                        What are the Prerequisites for starting this course?
                    </h1>
                    {courseData?.preRequisites?.map(
                        (item: any, index: number) => (
                            <div
                                className="w-full flex items-center my-2"
                                key={index}
                            >
                                <div className="w-[10px] mr-1">
                                    <IoMdCheckmarkCircleOutline className="text-cyan-500 text-lg" />
                                </div>
                                <p className="pl-2 text-xl">{item.title}</p>
                            </div>
                        )
                    )}
                </div>

                {/* Course Discription */}
                <div className="w-full mt-5">
                    <h1 className="text-xl font-Poppins font-bold">
                        Course Details
                    </h1>
                    <p className="my-2 text-lg">{courseData?.description}</p>
                </div>
            </div>

            <div className="w-full flex items-center justify-center gap-5 my-5">
                <button
                    className="py-1 px-3 text-xl text-white rounded-md shadow-lg bg-cyan-500 hover:bg-cyan-700 duration-200"
                    onClick={() => setActive(active - 1)}
                    disabled={active === 0}
                >
                    Prev
                </button>

                <button
                    className="py-1 px-3 text-xl text-white rounded-md shadow-lg bg-cyan-500 hover:bg-cyan-700 duration-200"
                    onClick={() => createCourse()}
                >
                    Create
                </button>
            </div>
        </div>
    );
};

export default CoursePreview;
