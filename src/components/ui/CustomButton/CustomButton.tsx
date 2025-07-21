import { Pressable, Text } from "react-native";
import { styles } from "./style";

export function CustomButton({
    title,
    onPress,
}: {
    title: string;
    onPress: () => void;
}) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed ? "lightgray" : "white",
                    opacity: pressed ? 0.5 : 1,
                },
            ]}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}
