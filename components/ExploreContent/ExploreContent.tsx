import {
    SafeAreaView,
    Switch,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    View,
} from "react-native";
import { useState, useRef } from "react";
import { PrevTopics } from "./PrevTopics";
import { styles } from "./style";
import { TextInputs } from "./TextInputs";
import { Lists } from "./Lists";

export function ExploreContent() {
    const refElement = useRef<ScrollView>(null);

    const [isVeiwList, setIsViewList] = useState<boolean>(false);

    const [isActive, setIsActive] = useState<boolean>(true);

    const handlePress = () => {
        return isActive === true ? setIsActive(false) : setIsActive(true);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView
                    ref={refElement}
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="never"
                    showsVerticalScrollIndicator={false}
                >
                    {isVeiwList ? (
                        <PrevTopics
                            tinyLogo={styles.tinyLogo}
                            handlePress={handlePress}
                            isActive={isActive}
                        />
                    ) : null}

                    <TextInputs />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}
                    >
                        <Switch
                            onValueChange={() => {
                                handlePress();
                            }}
                            value={isActive}
                            trackColor={{ false: "white", true: "yellow" }}
                        />
                        <Switch
                            onValueChange={setIsViewList}
                            value={isVeiwList}
                        />
                    </View>

                    {isVeiwList ? <Lists ref={refElement} /> : null}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
