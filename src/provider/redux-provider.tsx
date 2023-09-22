"use client";

import React, { FC, ReactNode } from "react";
import store from "@/redux/store";

import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "@/components/Loader/Loader";

interface IProviderProps {
    children: ReactNode;
}

const Custom: FC<{ children: ReactNode }> = ({ children }) => {
    const { isLoading } = useLoadUserQuery({});
    return <>{isLoading ? <Loader /> : children}</>;
};

export function ReduxProvider({ children }: IProviderProps) {
    return (
        <Provider store={store}>
            <SessionProvider>
                <Custom>{children}</Custom>
            </SessionProvider>
        </Provider>
    );
}
