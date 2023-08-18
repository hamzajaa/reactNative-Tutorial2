import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";


export default function Home({ navigation }) {
    return (
        <View>
            <Text>Welcome to Home Screen</Text>
            <Button onPress={() => {navigation.push("About")}}>About Page</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
    },
});