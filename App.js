import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.myStyle}></View>
      <View style={styles.myStyle}></View>
      <View style={styles.myStyle}></View>
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
    margin: 20,
    backgroundColor: "#F00",
  },
});
