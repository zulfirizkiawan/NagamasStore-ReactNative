import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Minus, Nippon, Plus, Trash} from '../../../assets';
import {Gap} from '../../atoms';
import {useState, useEffect} from 'react';
import {G} from 'react-native-svg';
import Number from '../Number';

const PesananCardProduct = ({
  nameProduct,
  image,
  price,
  item,
  status,
  onPress,
  totalProduk,
  totalHarga,
}) => {
  const getStatusColor = status => {
    const capitalizedStatus = status.charAt(0).toUpperCase() + status.slice(1);
    switch (capitalizedStatus) {
      case 'Pending':
        return '#F2B200';
      case 'Proses':
        return '#1565C0';
      case 'Kirim':
        return '#1565C0';
      case 'Selesai':
        return '#27AE60';
      default:
        return '#C10F0F';
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapStatus}>
        <Text>Status</Text>
        <Text
          style={[
            styles.statusText,
            {backgroundColor: getStatusColor(status)},
          ]}>
          {status}
        </Text>
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
            <Number number={price} style={styles.titlePrice} />
          </View>
        </View>
      </View>
      <View style={styles.garis} />
      <Gap height={5} />
      <View style={styles.wrapStatus}>
        <View style={styles.wrapContainer}>
          <Text style={styles.txtStok}>{totalProduk}</Text>
          <Text style={styles.txtStok}>Produk</Text>
        </View>
        <View style={styles.wrapContainer}>
          <Text style={styles.txtStok}>Total Pesanan :</Text>
          <Number number={totalHarga} style={styles.txtHarga} />
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
    paddingHorizontal: 10,
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
  txtHarga: {
    fontSize: 14,
    fontWeight: '500',
    color: '#27AE60',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  garis: {
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 0.7,
    marginTop: 10,
  },
});
