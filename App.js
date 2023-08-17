import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const MyView = () => {
  return (
    <View style={{ width: 100, height: 100, backgroundColor: "red" }}></View>
  )
}
export default function App() {
  let v = "Text";
  return (
    <View style={styles.container}>
      <MyView />
      <Text style={{ margin: 100 }}>{v}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
