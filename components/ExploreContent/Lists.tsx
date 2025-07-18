import { Text, SafeAreaView, ScrollView, Button } from "react-native";
import { forwardRef, RefObject } from "react";

type ListsProps = {};

export const Lists = forwardRef<ScrollView, ListsProps>(function Lists(
    {},
    ref: RefObject<ScrollView>
) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <Button
                title="Scroll to End"
                onPress={() => {
                    ref?.current?.scrollTo({ y: 1000, animated: true });
                }}
            />
            <Text style={{ color: "black", fontSize: 20 }}>smth</Text>
            {Array(20)
                .fill(0)
                .map((_, i) => (
                    <Text key={i} style={{ color: "black", fontSize: 20 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id incidunt quis velit? Natus, pariatur! Ipsa, molestiae
                        fugit quisquam expedita blanditiis illum libero a
                        voluptates eligendi ea totam autem aut ratione.
                    </Text>
                ))}
        </SafeAreaView>
    );
});
