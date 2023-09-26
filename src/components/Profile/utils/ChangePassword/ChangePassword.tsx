"use client";
import { useUpdatePasswordMutation } from "@/redux/features/user/userApi";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Props = {};

const ChangePassword: React.FC<Props> = (props) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [updatePassword, { isSuccess, error }] = useUpdatePasswordMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            return toast.error("Passwords do not match");
        }

        await updatePassword({ oldPassword, newPassword });

        // Add your password change logic here
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success("Password Changed Successfully");
            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");
        }

        if (error) {
            if ("data" in error) {
                const errorData = error as any;
                toast.error(errorData.data.message);
            }
        }
    }, [isSuccess, error]);

    return (
        <div className="w-full md:w-2/3   ">
            <div className=" rounded mb-4 px-0 md:px-16 mt-5">
                <h2 className="text-2xl font-semibold mb-6 w-full text-center">
                    Change Password
                </h2>
                <form onSubmit={handleSubmit} className="p-5">
                    <div className="mb-4">
                        <label
                            className="block  text-sm font-bold mb-2"
                            htmlFor="oldPassword"
                        >
                            Old Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            id="oldPassword"
                            type="password"
                            placeholder="Old Password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block  text-sm font-bold mb-2"
                            htmlFor="newPassword"
                        >
                            New Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            id="newPassword"
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block  text-sm font-bold mb-2"
                            htmlFor="confirmPassword"
                        >
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-cyan-500 hover:bg-cyan-700 duration-150  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Change Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
