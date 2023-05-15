import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Minus, Nippon, Plus, Trash} from '../../../assets';
import {Gap} from '../../atoms';
import {useState, useEffect} from 'react';
import Number from '../Number';

const CardPembayaran = ({product, image, price, item}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <View style={styles.wrapContainer}>
        <Text style={styles.titleProduct}>{product}</Text>
        <View style={styles.wrapPrice}>
          <Number number={price} style={styles.titlePrice} />
          <View style={styles.wrapBtn}>
            <Text style={styles.txtStok}>{item}</Text>
            <Gap width={8} />
            <Text> Item</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardPembayaran;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 10,
  },
  wrapContainer: {
    justifyContent: 'space-between',
    paddingVertical: 25,
    flex: 1,
  },
  img: {
    width: 110,
    height: 110,
    marginRight: 10,
    borderRadius: 10,
  },
  titleProduct: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333333',
  },
  titlePrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333333',
  },
  txtStok: {
    fontSize: 12,
    fontWeight: '400',
    color: '#565656',
  },
  wrapPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  wrapBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
