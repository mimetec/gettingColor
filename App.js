import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Button } from './src/components';

export default function App() {
  const [name, setName] = useState('Danielle');
  const [age, setAge] = useState(90);
  const [person, setPerson] = useState({ name: 'Mario', age: 43 })
  const [headline, setHeadline] = useState('Hello World!');
  const [hexColors, setHexColors] = useState([
    { name: 'goldenrod', hex: "daa520", key: '1'},
    { name: 'gray', hex: "808080", key: '2'},
    { name: 'grey', hex: "808080", key: '3'},
    { name: 'green', hex: "008000", key: '4'},
    { name: 'greenyellow', hex: "adff2f", key: '5'},
    { name: 'honeydew', hex: "f0fff0", key: '6'},
    { name: 'hotpink', hex: "ff69b4", key: '7'},
    { name: 'indigo', hex: "4b0082", key: '8'},
    { name: 'ivory', hex: "fffff0", key: '9'},
    { name: 'khaki', hex: "f0e68c", key: '10'},
    { name: 'lavender', hex: "e6e6fa", key: '11'}
  ]);

  const clickHandler = () => {
    setName('Marc');
    setPerson({ name: 'Luigi', age: 37 })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>gettingColor</Text>
      </View>

<ScrollView>
      <View style={styles.listColors}>
        {hexColors.map((item) => (
              <View key={item.key}>
                <Text 
                // figure out how to mix external styles and the background color
                  style={{ marginVertical: 10, padding: 10, color: 'black', backgroundColor: `#${item.hex}` }}
                  >
                    {item.name}
                </Text>
              </View>
            ))}
      </View>



      {/* button and inputs commit */}
      <View style={styles.body}>

        <Button title='update state name' onPress={clickHandler} />

        <Text>Enter Name:</Text>
        <TextInput
          style={styles.input}
          placeholder='type your name here'
          onChangeText={(val) => setName(val)}
        />

        <Text>Enter Age:</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder='type your age here'
          onChangeText={(val) => setAge(val)}
        />

        <Text>Enter headline:</Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder='type your headline or pronouns here'
          onChangeText={(val) => setHeadline(val)}
        />

        <Text>Welcome {name}! and age {age}</Text>
        <Text>His name is {person.name} and his age is {person.age} This is our body, what happens if there's more text than width of the screen</Text>
        <Text>This is our body and this next bit is our headline: 
          <Text style={styles.h2}>{headline}</Text>
        </Text>

      </View>
      
      {/* end button and inputs commit */}

</ScrollView>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  header: {
    backgroundColor: 'green',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'lightgreen',
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 200,
    backgroundColor: 'white'
  },
  h2: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    display: 'flex',
  }
});
