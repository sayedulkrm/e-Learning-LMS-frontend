"use state";
import React, { FC, useEffect, useState } from "react";
import axios from "axios";

type Props = {
    videoUrl: string;
    title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl, title }) => {
    const [videoData, setVideoData] = useState({
        otp: "",
        playbackInfo: "",
    });

    useEffect(() => {
        axios
            .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/getVdoCiperOTP`, {
                videoId: videoUrl,
            })
            .then((res) => {
                setVideoData(res.data);
            });
    }, [videoUrl]);

    return (
        <div className="relative pt-10">
            {videoData.otp && videoData.playbackInfo !== "" && (
                <iframe
                    src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData?.playbackInfo}&player=Nt9XRRjzE8iW9bUK`}
                    style={{
                        border: 0,
                        width: "100%",
                        height: "100%",
                        minHeight: "300px",
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                    allow="encrypted-media"
                    allowFullScreen={true}
                ></iframe>
            )}
        </div>
    );
};

export default CoursePlayer;
