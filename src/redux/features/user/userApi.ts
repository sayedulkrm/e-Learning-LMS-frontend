import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // update user profile picture

        updateAvatar: builder.mutation({
            query: (avatar) => ({
                url: "/me/updateprofilepicture",
                method: "PUT",
                body: { avatar },
                credentials: "include" as const,
            }),
        }),
        // Will add Update profile name

        updatePassword: builder.mutation({
            query: ({ oldPassword, newPassword }) => ({
                url: "/me/updatepassword",
                method: "PUT",
                body: { oldPassword, newPassword },
                credentials: "include" as const,
            }),
        }),
    }),
});

export const { useUpdateAvatarMutation, useUpdatePasswordMutation } = userApi;
