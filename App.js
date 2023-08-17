import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.myStyle}>
        <Text style={styles.blueFont}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  myStyle: {
    width: "100%", // 100% from parents Component
    height: 50,
    backgroundColor: "#F00",
  },
});
