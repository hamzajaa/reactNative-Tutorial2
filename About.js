import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";


export default function About({ navigation }) {
    return (
        <View>
            <Text>Welcome to About Screen</Text>
            <Button onPress={() => { navigation.navigate("Home") }}>Home Page</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
    },
});