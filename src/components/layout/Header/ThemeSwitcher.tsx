"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { BiMoon, BiSun } from "react-icons/bi";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="flex items-center justify-center mx-4">
            {theme === "light" ? (
                <BiMoon
                    fill="black"
                    className="cursor-pointer text-2xl"
                    onClick={() => setTheme("dark")}
                />
            ) : (
                <BiSun
                    className="cursor-pointer text-2xl"
                    onClick={() => setTheme("light")}
                />
            )}
        </div>
    );
};

export default ThemeSwitcher;
