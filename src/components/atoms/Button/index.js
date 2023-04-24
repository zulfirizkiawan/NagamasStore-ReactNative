import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.BtnLogin} onPress={onPress}>
      <Text style={styles.TxtLogin}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  BtnLogin: {
    backgroundColor: '#335C32',
    paddingVertical: 13,
    borderRadius: 7,
    width: '100%',
  },
  TxtLogin: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 1,
  },
});
