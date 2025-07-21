import {
    Modal,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    StyleProp,
    ViewStyle,
    TextStyle,
} from "react-native";
import { useState } from "react";
import { ModalLayout } from "@/src/layouts/ModalLayout";

export function ModalWindow({
    isVisible,
    setIsVisible,
    modalViewContainer,
    modalView,
    input,
    button,
    buttonClose,
    hideTextStyle,
}: {
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
    modalViewContainer: StyleProp<ViewStyle>;
    modalView: StyleProp<ViewStyle>;
    input: StyleProp<TextStyle>;
    button: StyleProp<ViewStyle>;
    buttonClose: StyleProp<ViewStyle>;
    hideTextStyle: StyleProp<TextStyle>;
}) {
    const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

    return (
        <Modal onRequestClose={() => setIsVisible(false)} visible={isVisible} transparent={true}>
            <ModalLayout
                isOpenKeyboard={isOpenKeyboard}
                setIsOpenKeyboard={setIsOpenKeyboard}
                setIsVisible={setIsVisible}
                isVisible={isVisible}
            >
                <View style={modalViewContainer}>
                    <View style={modalView}>
                        <TextInput style={input} onTouchStart={() => setIsOpenKeyboard(true)} />
                        <TouchableOpacity
                            style={[button, buttonClose]}
                            onPress={() => setIsVisible(!isVisible)}
                        >
                            <Text style={hideTextStyle}>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ModalLayout>
        </Modal>
    );
}
