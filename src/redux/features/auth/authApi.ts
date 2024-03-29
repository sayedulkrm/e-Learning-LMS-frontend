import { apiSlice } from "../api/apiSlice";
import { userLogin, userLogout, userRegistration } from "./authSlice";

type RegistrationResponse = {
    message: string;
    activationToken: string;
};

type RegistrationData = {};

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // all endpoints
        register: builder.mutation<any, any>({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data,
                credentials: "include" as const,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userRegistration({
                            token: result.data.activationToken,
                        })
                    );
                } catch (error: any) {
                    console.log(error.message);
                }
            },
        }),

        // activation code
        activation: builder.mutation({
            query: ({ activation_token, activation_code }) => ({
                url: "/activate-user",
                method: "POST",
                body: {
                    activation_token,
                    activation_code,
                },
            }),
        }),

        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "/login",
                method: "POST",
                body: {
                    email,
                    password,
                },
                credentials: "include" as const,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userLogin({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (error: any) {
                    console.log(error.message);
                }
            },
        }),

        socialAuth: builder.mutation({
            query: ({ name, email, avatar }) => ({
                url: "/social-auth",
                method: "POST",
                body: {
                    name,
                    email,
                    avatar,
                },
                credentials: "include" as const,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userLogin({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (error: any) {
                    console.log(error.message);
                }
            },
        }),

        logout: builder.query({
            query: () => ({
                url: "/logout",
                method: "GET",
                credentials: "include" as const,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    dispatch(userLogout());
                } catch (error: any) {
                    console.log(error.message);
                }
            },
        }),
    }),
});

export const {
    useRegisterMutation,
    useActivationMutation,
    useLoginMutation,
    useSocialAuthMutation,
    useLogoutQuery,
} = authApi;
