import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Danielle');
  const [person, setPerson] = useState({ name: 'Mario', age: 43 })

  const clickHandler = () => {
    setName('Marc');
    setPerson({ name: 'Luigi', age: 37 })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>gettingColor</Text>
      </View>
      <View style={styles.body}>
        <Text>Welcome {name}!</Text>
        <Text>His name is {person.name} and his age is {person.age} This is our body, what happens if there's more text than width of the screen</Text>
        <Text>This is our body</Text>
        <View style={styles.buttonContainer}>
          <Button title='update state name' onPress={clickHandler}/>
        </View>
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
  header: {
    backgroundColor: 'green',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'lightgreen',
    color: 'white',
  },
  buttonContainer: {
    marginTop: 20
  }
});
