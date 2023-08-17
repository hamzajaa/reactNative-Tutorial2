import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.blueFont}>Open up App.js to start working on your app!</Text>
      <Text style={{ color: '#0f0' }}>Open up App.js to start working on your app!</Text>
      <Text style={styles.blueFont}>Open up App.js to start working on your app!</Text>
      <View>
        <Text>fffda</Text>
        <Text>fffda</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueFont: {
    color: '#00f'
  }
});
