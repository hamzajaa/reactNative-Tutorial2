import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function App() {
  const myFunction = () =>{
    alert("hello world!")
  }
  return (
    <View style={styles.container}>
      <Button style={{ backgroundColor: "#0f0" }} onPress={() => myFunction()}>
        <Text style={{ color: "white" }}>Press me</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200
  },
});
