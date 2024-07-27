import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function InputTextBox(props) {
  const { onChangeText, 
    value = 'Default value', 
    placeholder = 'Default placeholder', 
    inputMode = 'text',
    rows = 4,
    maxLength = 40,
    readOnly = false,
    multiline = false,
   } = props;

  // If you type something in the text box that is a color, 
  // the background will change to that color.
  return (
    <View
      style={{
        backgroundColor: value
      }}>
      <TextInput
        readOnly={readOnly}
        multiline={multiline}
        rows={rows}
        maxLength={maxLength}
        onChangeText={onChangeText}
        value={value}
        style={multiline ? [styles.input, styles.multilineInput] : styles.input }
        placeholder={placeholder}
        inputMode={inputMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  multilineInput: {
    height: 100,
  },
});