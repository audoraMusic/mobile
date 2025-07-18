import { StyleSheet, SafeAreaView, Button, View, Text } from "react-native";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Главная</Text>
            <View style={styles.panel}>
                <Button title="Любимые" color="white" />
                <Button title="Плейлисты" color="white" />
            </View>
            <View style={styles.panel}>
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
    },
    panel: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 16,
    },
    title: {
        color: "white",
        margin: 20,
        fontSize: 25,
    },
    slider: {
        width: 300,
        backgroundColor: "white",
        
    }
});
