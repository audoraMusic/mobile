import "react-native-gesture-handler";
import React from "react";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// компоненты


import { tabScreens } from "./tabScreens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// bottom tabs
const Tabs: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {tabScreens.map(({ name, component, icon }) => (
                <Tab.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => icon(focused, color, size),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

// page routing: передаю внутрь tabs
const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName={"Tabs"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"Tabs"} component={Tabs} />
        </Stack.Navigator>
    );
};

export const Navigation: React.FC = () => {
    const colorScheme = useColorScheme();

    return (
        <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
};
