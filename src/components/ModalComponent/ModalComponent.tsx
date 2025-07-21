import {
    Text,
    SafeAreaView,
    KeyboardAvoidingView,
    Modal,
    View,
    TouchableOpacity,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    Platform,
    ImageBackground,
} from "react-native";
import { styles } from "./style";
import { useState } from "react";

export function ModalComponent() {
    const [isVisible, setIsVisible] = useState(false);

    const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);

    return (
        <ImageBackground
            source={require("./back.jpg")}
            resizeMode="cover"
            style={{ flex: 1 }}
        >
                <SafeAreaView style={styles.modalContainer}>
                    <Modal
                        onRequestClose={() => setIsVisible(false)}
                        visible={isVisible}
                        transparent={true}
                    >
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
                            <View style={styles.modalViewContainer}>
                                <View style={styles.modalView}>
                                    <TextInput
                                        style={styles.input}
                                        onTouchStart={() =>
                                            setIsOpenKeyboard(true)
                                        }
                                    />
                                    <TouchableOpacity
                                        style={[
                                            styles.button,
                                            styles.buttonClose,
                                        ]}
                                        onPress={() => setIsVisible(!isVisible)}
                                    >
                                        <Text style={styles.hideTextStyle}>
                                            Hide Modal
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                    </Modal>
                    {!isVisible ? (
                        <TouchableOpacity
                            style={styles.buttonOpen}
                            onPress={() => {
                                setIsVisible(true);
                            }}
                        >
                            <Text style={styles.textStyle}>Open modal</Text>
                        </TouchableOpacity>
                    ) : null}
                </SafeAreaView>
        </ImageBackground>
    );
}
