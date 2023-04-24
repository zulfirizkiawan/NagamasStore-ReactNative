import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gap} from '../../atoms';

const CardMekanik = ({image, onPress}) => {
  return (
    <View style={styles.wrapMekanik}>
      <Image source={image} style={styles.imgMekanik} />
      <Gap width={10} />
      <TouchableOpacity onPress={onPress}>
        <View style={styles.wrapBtn}>
          <Text style={styles.txtBtn}>Sewa</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardMekanik;

const styles = StyleSheet.create({
  wrapMekanik: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 10,
  },
  imgMekanik: {
    width: 240,
    height: 70,
    marginHorizontal: 10,
  },
  wrapBtn: {
    backgroundColor: '#335C32',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
  },
  txtBtn: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
