import { Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { CustomButton } from "@/src/components/ui/CustomButton/CustomButton";
import { MainLayout } from "@/src/layouts/MainLayout";

export function MainContent() {
    const [text, setText] = useState("");

    return (
        <MainLayout>
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
                <TextInput onChangeText={setText} value={text} style={styles.input} />
                <CustomButton title="Button" onPress={() => console.log("smth")} />
            </View>
        </MainLayout>
    );
}
