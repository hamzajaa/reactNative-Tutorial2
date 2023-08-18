import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function App() {

  let x = 0;
  const [x2, setX2] = useState(0);
  return (
    <View style={styles.container}>
      <Button onPress={() => { x++, setX2(x2 + 1) }}> Click me </Button>
      <Text style={{ paddingLeft: 150, color: "red" }}>without useState</Text>
      <Text style={{ paddingLeft: 200, color: "red" }}>{x}</Text>
      <Text style={{ paddingLeft: 160, color: "green" }}>with useState</Text>
      <Text style={{ paddingLeft: 200, color: "green" }}>{x2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
});
