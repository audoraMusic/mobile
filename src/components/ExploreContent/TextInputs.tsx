import {
    Text,
    SafeAreaView,
    Button,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { styles } from "./style";
import { useState, useRef } from "react";

export function TextInputs() {
    const inputRef = useRef<TextInput>(null);

    const secontInputRef = useRef<TextInput>(null);

    const [isFocus, setIsFocus] = useState(false);

    const [text, onChangeText] = useState<string>("Useless Text");

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="focus me"
                keyboardType="url"
                autoFocus={false}
                defaultValue="smth"
                ref={secontInputRef}
                // value={text}
                returnKeyType="send"
            />
            <TextInput
                ref={inputRef}
                editable
                multiline
                numberOfLines={4}
                maxLength={66}
                onChangeText={(text) => onChangeText(text)}
                value={text}
                style={styles.multiline}
                keyboardType="email-address"
                secureTextEntry={true}
                onFocus={() => console.log("smth")}
            />

            <TouchableOpacity style={styles.button}>
                <Button
                    title="remove"
                    onPress={() => {
                        secontInputRef.current?.clear();
                        onChangeText("");
                    }}
                />
            </TouchableOpacity>

            {!isFocus ? (
                <Button
                    title="focus"
                    onPress={() => {
                        inputRef.current?.focus();
                        setIsFocus(true);
                    }}
                />
            ) : (
                <Button
                    title="unfocus"
                    onPress={() => {
                        inputRef.current?.blur();
                        setIsFocus(false);
                    }}
                />
            )}
        </View>
    );
}
