import React, { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
    AiOutlineEye,
    AiOutlineEyeInvisible,
    AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { style } from "@/styles/style";
import Link from "next/link";

type Props = {
    routes: string;
    setRoute: (route: string) => void;
    setOpen: (open: boolean) => void;
};

const schema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter a valid email address"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Please enter your password"),
});

const Login: FC<Props> = ({ setRoute }) => {
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: schema,
        onSubmit: async ({ email, password }) => {
            console.log(email, password);
        },
    });

    const { errors, touched, values, handleSubmit, handleChange } = formik;

    return (
        <div className="w-full">
            <h1 className={`${style.title} text-center`}>Login</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
                <div className="mb-4">
                    <label htmlFor="email" className="block  font-semibold">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className={`w-full border bg-transparent border-gray-300 p-2 rounded-md ${
                            errors.email && touched.email
                                ? "border-red-500"
                                : "focus:border-blue-500 focus:ring focus:ring-blue-200"
                        }`}
                    />
                    {errors.email && touched.email && (
                        <div className="text-red-500 text-sm">
                            {errors.email}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block  font-semibold">
                        Password:
                    </label>
                    <div className=" relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            className={`w-full border bg-transparent border-gray-300 p-2 rounded-md ${
                                errors.password && touched.password
                                    ? "border-red-500"
                                    : "focus:border-blue-500 focus:ring focus:ring-blue-200"
                            }`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-3 right-2 text-xl"
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible />
                            ) : (
                                <AiOutlineEye />
                            )}
                        </button>
                    </div>
                    {errors.password && touched.password && (
                        <div className="text-red-500 text-sm">
                            {errors.password}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className={`w-full ${style.button} mt-2 text-black font-semibold bg-gradient-to-r from-violet-200 to-pink-200 hover:from-violet-300 hover:to-pink-300 transform hover:scale-105 transition duration-300`}
                    >
                        Login
                    </button>

                    <p className="text-center my-5">or join with</p>
                    <div className="flex justify-center ">
                        <a href="/auth/google" className=" mx-2">
                            <FcGoogle className="inline-block text-3xl" />
                        </a>
                        <a href="/auth/github" className=" mx-2">
                            <AiFillGithub className="inline-block text-3xl" />
                        </a>
                    </div>

                    <p className=" text-center mt-5">
                        Don't have an account?{" "}
                        <span
                            className="text-blue-500 cursor-pointer"
                            onClick={() => setRoute("Register")}
                        >
                            Register here
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
