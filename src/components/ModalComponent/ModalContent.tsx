import { Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { ModalWindow } from "./ModalWindow";

export function ModalContent() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <ImageBackground
            source={require("../../assets/images/modalBack.jpg")}
            resizeMode="cover"
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <ModalWindow
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                modalViewContainer={styles.modalViewContainer}
                modalView={styles.modalView}
                input={styles.input}
                button={styles.button}
                buttonClose={styles.buttonClose}
                hideTextStyle={styles.hideTextStyle}
            />

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
        </ImageBackground>
    );
}
