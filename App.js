import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function App() {
  const myData = [
    { id: "1", name: "hamza" },
    { id: "2", name: "omar" },
    { id: "3", name: "slah" },
    { id: "4", name: "yassine" },
    { id: "5", name: "mustapha" },
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={myData}
        // numColumns={2}
        renderItem={({ item }) => {
          return (
            <View style={{ backgroundColor: "black", borderRadius: 20, marginVertical: 20, margin: 20, padding: 20 }}>
              <Text style={{ fontSize: 20, color: "white" }}>{item.name}</Text>
            </View>
          )
        }}
        keyExtractor={(item) => item.id} // sould be unique
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
