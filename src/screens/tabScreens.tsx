import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Main } from "./Main";
import { Modal } from "./Modal";

export const tabScreens = [
    {
        name: "Main",
        component: Main,
        icon: (focused: boolean, color: string, size: number) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
        ),
    },
    {
        name: "Modal",
        component: Modal,
        icon: (focused: boolean, color: string, size: number) => (
            <Ionicons name={!focused ? "golf-outline" : "golf-sharp"} size={size} color={color} />
        ),
    },
];
