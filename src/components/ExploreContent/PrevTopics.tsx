import {
    SafeAreaView,
    View,
    ActivityIndicator,
    Image,
    Button,
    Text,
    Pressable,
} from "react-native";

import { CustomButton } from "../CustomButton/CustomButton";

export function PrevTopics({
    tinyLogo,
    isActive,
    handlePress,
}: {
    tinyLogo: object;
    isActive: boolean;
    handlePress: () => void;
}) {
    return (
        <SafeAreaView>
            <View
                // onTouchEnd={(e) => console.log("e", e.nativeEvent)}
                style={{ padding: 20, backgroundColor: "lightblue" }}
            >
                <Text onPress={(e) => console.log(e.nativeEvent)}>
                    Tap or use accessibility actions
                </Text>
            </View>
            <ActivityIndicator size="large" color="blue" animating={isActive} />
            <CustomButton
                onPress={() => handlePress()}
                title={isActive ? "Off" : "On"}
            />
            <Image
                style={tinyLogo}
                blurRadius={1}
                resizeMode="cover"
                source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
            />
        </SafeAreaView>
    );
}
