import { ReactNode } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";

export function ModalLayout({
    children,
    isOpenKeyboard,
    setIsOpenKeyboard,
    setIsVisible,
    isVisible,
}: {
    children: ReactNode,
    isOpenKeyboard: boolean,
    setIsOpenKeyboard: (isOpenKeyboard: boolean) => void,
    setIsVisible: (isVisible: boolean) => void,
    isVisible: boolean
}) {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback
                onPress={() => {
                    if (isOpenKeyboard) {
                        Keyboard.dismiss();
                        setIsOpenKeyboard(false);
                    } else {
                        setIsVisible(!isVisible);
                    }
                }}
            >
                {children}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
