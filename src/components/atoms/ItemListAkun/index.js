import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Next} from '../../../assets';

const ItemListAkun = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapAkun}>
        <Text style={styles.lihatProfile}>{title}</Text>
        <Next />
      </View>
    </TouchableOpacity>
  );
};

export default ItemListAkun;

const styles = StyleSheet.create({
  wrapAkun: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lihatProfile: {
    fontSize: 14,
    color: '#282828',
    fontWeight: '400',
    flex: 1,
  },
});
