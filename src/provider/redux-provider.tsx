"use client";

import React, { ReactNode } from "react";
import store from "@/redux/store";

import { Provider } from "react-redux";

interface IProviderProps {
    children: ReactNode;
}

export function ReduxProvider({ children }: IProviderProps) {
    return <Provider store={store}>{children}</Provider>;
}
