import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
    return (
        <div className=" flex flex-col md:flex-row items-center">
            {/* Left side: Hero Image */}
            <div className="w-full md:w-1/2 p-6  flex items-center justify-center  relative">
                <div className=" hidden md:block bg-gradient-to-tl from-fuchsia-100 to-pink-400 shadow-lg dark:bg-gradient-to-br dark:from-cyan-700 dark:to-slate-900  h-[450px] w-[450px]  rounded-full absolute top-10 left-28 opacity-10 z-0 hero_animation" />

                <Image
                    src={require("../../../../public/assets/banner.png")}
                    alt="edumastery"
                    className="rounded-md z-50 object-contain h-full w-full md:h-[500px] md:w-[500px]"
                />
            </div>

            {/* Right side: Title and Description */}
            <div className="w-full md:w-1/2 p-6 text-center md:text-start">
                <h1 className="text-3xl md:text-5xl font-bold my-4 ">
                    Unlock the World of Knowledge
                </h1>
                <p className="text-gray-600">
                    Embark on an Educational Odyssey Where Every Click Takes You
                    Closer to Mastery and a World of Infinite Learning
                    Possibilities.
                </p>
            </div>
        </div>
    );
};

export default Hero;
