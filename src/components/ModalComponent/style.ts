import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalViewContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    modalView: {
        width: 300,
        height: 300,
        margin: "auto",
        backgroundColor: "#555",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        justifyContent: "space-around",
        shadowColor: "#aaa",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        gap: 20,
    },
    button: {
        borderRadius: 10,
        padding: 20,
        elevation: 2,
    },
    buttonOpen: {
        width: 200,
        height: 100,
        backgroundColor: "white",
        borderRadius: 10,
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        fontWeight: "bold",
        fontSize: 20,
        margin: "auto",
    },
    hideTextStyle: {
        fontSize: 15,
    },
    input: {
        backgroundColor: "green",
        width: 150,
        height: 50,
        borderRadius: 10,
    },
});
