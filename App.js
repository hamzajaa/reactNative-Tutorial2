import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.myStyle}>
        <View style={styles.myStyleChild}></View>
      </View>
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
  }
});
