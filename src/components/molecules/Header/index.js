import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gap} from '../../atoms';
import {Back} from '../../../assets';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Back />
      </TouchableOpacity>
      <Text style={styles.TxtHeader}>{title}</Text>
      <Gap width={23} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 24,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TxtHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#333333',
    fontWeight: '500',
  },
});
