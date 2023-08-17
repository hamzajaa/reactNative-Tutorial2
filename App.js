import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewStyle1}></View>
      <View style={styles.viewStyle2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
  viewStyle1: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    alignSelf: "flex-start",
  },
  viewStyle2: {
    width: 100,
    height: 100,
    backgroundColor: "blue"
  },

});
