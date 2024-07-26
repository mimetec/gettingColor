import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import EventView from './eventView';

export default function Button(props) {
  const { onPress, title = 'Default value' } = props;
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <LinearGradient
          colors={pressed ? ['#b3b6b7', '#eceff1'] : ['#eceff1', '#b3b6b7']}
          // start={{ x: 0.0, y: 0.0 }}
          // end={{ x: 1.0, y: 1.0 }}
          // locations={[1.0, 0.0]}
          style={{ ...styles.grayBTN }}>
          <Text style={styles.text}>{title}</Text>
        </LinearGradient>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  grayBTN: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    boxShadow: '3px 3px 3px #7b7d7d',
    elevation: 5,
    backgroundColor: "#ededed",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 5,
    marginHorizontal: 5
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#626567',
  },
});
