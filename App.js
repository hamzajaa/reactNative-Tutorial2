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
  },
  viewStyle1: {
    width: 100,
    height: 100,
    backgroundColor: "#F00",
    position: 'relative',
  },
  viewStyle2: {
    width: 100,
    height: 100,
    backgroundColor: "#00F",
    position: 'relative',
  },
  viewStyle3: {
    width: 100,
    height: 100,
    backgroundColor: "#0F0",
    position: 'absolute',
    top:50,
    left: 50,
  },

});
