import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewStyle1}></View>
      <View style={styles.viewStyle2}></View>
        <View style={styles.viewStyle3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  viewStyle1: {
    flex: 1,
    backgroundColor: "#f00"
  },
  viewStyle2: {
    flex: 2,
    backgroundColor: "#00f"
  },
  viewStyle3: {
    flex: 3,
    backgroundColor: "#0f0"
  }

});
