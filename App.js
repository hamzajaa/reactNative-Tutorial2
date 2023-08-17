import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';


export default function App() {
  let v = "Text";
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "red", width: 100, height: 100 }}>
        <Text style={{margin: 20, backgroundColor: "#0f0"}}>Sample Text</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
