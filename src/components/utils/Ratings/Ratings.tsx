import React, { FC } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

type Props = {
    rating: number;
};

const Ratings: FC<Props> = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(
                <AiFillStar
                    key={i}
                    className="text-yellow-500 text-lg cursor-pointer mr-2"
                />
            );
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(
                <BsStarHalf
                    key={i}
                    className=" text-lg cursor-pointer mr-2"
                    color="#f6ba00"
                />
            );
        } else {
            stars.push(
                <AiOutlineStar
                    key={i}
                    className="text-[#f6ba00] text-lg cursor-pointer mr-2"
                />
            );
        }
    }

    return <div className="flex m-1"> {stars}</div>;
};

export default Ratings;
