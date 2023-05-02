import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gap} from '../../atoms';

const CardMekanik = ({image, onPress, kategori}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapMekanik}>
        <Image source={image} style={styles.imgMekanik} />
        <Gap width={10} />
        <TouchableOpacity onPress={onPress}>
          <View style={styles.wrapBtn}>
            <Text style={styles.txtBtn}>Sewa</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.garis} />
      <View style={styles.wrapMekanik}>
        <Text style={styles.txtKategori}>Kategori</Text>
        <Text style={styles.txtMobil}>{kategori}</Text>
      </View>
    </View>
  );
};

export default CardMekanik;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  wrapMekanik: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgMekanik: {
    width: 240,
    height: 70,
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
  garis: {
    height: 1,
    backgroundColor: '#E2E0EC',
    marginTop: 10,
  },
});
