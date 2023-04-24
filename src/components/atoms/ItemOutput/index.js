import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ItemOutput = ({title, result}) => {
  return (
    <View style={styles.wrapInformasi}>
      <Text style={styles.txtMekanik}>{title}</Text>
      <Text style={styles.txtHasilMekanik}>{result}</Text>
    </View>
  );
};

export default ItemOutput;

const styles = StyleSheet.create({
  wrapInformasi: {
    flexDirection: 'row',
    marginTop: 5,
  },
  txtMekanik: {
    fontSize: 14,
    fontWeight: '400',
    color: '#313131',
    flex: 1,
  },
  txtHasilMekanik: {
    fontSize: 14,
    fontWeight: '500',
    color: '#313131',
  },
});
