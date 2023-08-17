import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Sample Text
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  myStyle: {
    width: 100,
    height: 100,
    backgroundColor: "#F00",
    padding: 20,
  },
  myStyleChild: {
    width: 20,
    height: 20,
    backgroundColor: "#0f0"
  },
  textStyle: {
    color: "#f00",
    fontSize: 19,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    textAlign: "center",
  }
});
