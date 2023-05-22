import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({
  title,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  keyboardType,
  note,
}) => {
  return (
    <View>
      <Text style={styles.txttitle}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}></TextInput>
      <View style={styles.garis} />
      <Text style={styles.notes}>{note}</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  txttitle: {
    color: '#335C32',
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 1,
  },
  input: {
    marginTop: -8,
    fontSize: 14,
    color: '#313131',
  },
  garis: {
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 0.7,
    marginTop: -10,
  },
  notes: {
    color: '#BDBDBD',
    fontSize: 12,
    fontWeight: '400',
    // marginTop: 2,
  },
});
