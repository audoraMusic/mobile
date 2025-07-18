import {
    SafeAreaView,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
} from "react-native";
import { ScrollView } from "react-native";
import { styles } from "./style";
import { useRef, useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";

export function PlaylistsContent() {
    const [text, setText] = useState("");

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <SafeAreaView style={styles.container}>
                    <View
                        style={{
                            backgroundColor: "white",
                            width: 300,
                            height: 200,
                            marginInline: "auto",
                            marginTop: 20,
                        }}
                    >
                        <Text>{text}</Text>
                    </View>

                    <View style={styles.wrapper}>
                        <TextInput
                            onChangeText={setText}
                            value={text}
                            style={styles.input}
                        />
                        <CustomButton
                            title="Button"
                            onPress={() => console.log("smth")}
                        />
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}
