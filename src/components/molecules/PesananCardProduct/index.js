import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Minus, Nippon, Plus, Trash} from '../../../assets';
import {Gap} from '../../atoms';
import {useState, useEffect} from 'react';
import {G} from 'react-native-svg';

const PesananCardProduct = ({
  nameProduct,
  image,
  price,
  item,
  status,
  onPress,
}) => {
  const getStatusText = () => {
    if (status === 'Pending') {
      return <Text style={styles.pending}>Pending</Text>;
    }
    if (status === 'Proses') {
      return <Text style={styles.proses}>Proses</Text>;
    }
    if (status === 'Kirim') {
      return <Text style={styles.proses}>Kirim</Text>;
    }
    if (status === 'Selesai') {
      return <Text style={styles.selesai}>Selesai</Text>;
    }
    if (status === 'Batal') {
      return <Text style={styles.batal}>Batal</Text>;
    }
  };

  const statusText = getStatusText();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapStatus}>
        <Text>Status</Text>
        {statusText}
      </View>
      <View style={styles.wrapContainer}>
        <Image source={image} style={styles.img} />
        <View style={styles.wrapInform}>
          <Text style={styles.titleProduct}>{nameProduct}</Text>
          <Gap height={10} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.txtStok}>{item}</Text>
            <Text style={styles.txtStok}>Item</Text>
            <View style={styles.titik} />
            <Text style={styles.titlePrice}>Rp {price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PesananCardProduct;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  wrapStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapContainer: {
    flexDirection: 'row',
  },
  titik: {
    width: 3,
    height: 3,
    backgroundColor: '#333333',
    borderRadius: 3,
  },
  wrapInform: {
    paddingVertical: 10,
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
    marginLeft: 5,
  },
  txtStok: {
    fontSize: 14,
    fontWeight: '400',
    color: '#565656',
    marginRight: 5,
  },
  wrapPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingRight: 20,
  },
  wrapBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pending: {
    color: 'white',
    backgroundColor: '#F2B200',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  proses: {
    color: 'white',
    backgroundColor: '#1565C0',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  kirim: {
    color: 'white',
    backgroundColor: '#1565C0',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  selesai: {
    color: 'white',
    backgroundColor: '#27AE60',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  batal: {
    color: 'white',
    backgroundColor: '#C10F0F',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
});
