import "react-native-gesture-handler";
import React from "react";
import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// компоненты
import { BlurTabBarBackground } from "../components/ui/TabBarBackground.ios";

// экраны
import { ExploreContent } from "../components/ExploreContent/ExploreContent";
import { ModalComponent } from "../components/ModalComponent/ModalComponent";
import { PlaylistsContent } from "../components/PlaylistsContent/PlaylistsContent";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// bottom tabs
const Tabs: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{ tabBarBackground: BlurTabBarBackground }}
        >
            <Tab.Screen name={"Main"} component={PlaylistsContent} />
            <Tab.Screen name={"Explore"} component={ExploreContent} />
            <Tab.Screen name={"Modal"} component={ModalComponent} />
        </Tab.Navigator>
    );
};

// page routing: передаю
const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName={"Tabs"}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={"Tabs"} component={Tabs} />
        </Stack.Navigator>
    );
};

export const Navigation: React.FC = () => {
    const colorScheme = useColorScheme();

    return (
        <NavigationContainer
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    );
};
