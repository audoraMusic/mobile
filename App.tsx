import { Navigation } from "./src/screens/Navigation";
import { useFonts } from "expo-font";
import {
    NunitoSans_300Light,
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
    NunitoSans_900Black,
} from "@expo-google-fonts/nunito-sans";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function App() {
    const [loaded] = useFonts({
        NunitoSans_300Light,
        NunitoSans_400Regular,
        NunitoSans_600SemiBold,
        NunitoSans_700Bold,
        NunitoSans_800ExtraBold,
        NunitoSans_900Black,
    });

    if (!loaded) {
        return <></>;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <Navigation />
        </GestureHandlerRootView>
    );
}
