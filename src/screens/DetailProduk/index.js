import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buttons, Gap, Headers, Number} from '../../components';
import {Nippon} from '../../assets';
import {getData, useForm} from '../../utils';
import {useState} from 'react';
import {useEffect} from 'react';
import {cartAction} from '../../redux/action/cart';
import {useDispatch} from 'react-redux';
import Axios from 'axios';

const DetailProduk = ({navigation, route}) => {
  const {itemProduct, userProfile} = route.params;

  const data = {
    user_id: userProfile.id,
    product_id: itemProduct.id,
    quantity: 1,
    price: itemProduct.price,
    status_check: 1,
  };
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(cartAction(data, navigation));
  };

  return (
    <View style={styles.container}>
      <Headers title="Detail Produk" onPress={() => navigation.goBack('')} />
      <ScrollView>
        <Gap height={10} />
        <Image
          source={{uri: itemProduct.productPhotoPath}}
          style={styles.imgMekanik}
        />
        <View style={styles.wrapContainer}>
          <Text style={styles.titleProduct}>{itemProduct.name}</Text>
          <Number number={itemProduct.price} style={styles.titlePrice} />
          <Text style={styles.txtStok}>Tersedia stok {itemProduct.stock}</Text>
        </View>
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Text style={styles.txtInformasi}>Deskripsi Produk</Text>
          <Gap height={5} />
          <Text style={styles.txtDeskripsi}>{itemProduct.description}</Text>
        </View>

        <Gap height={10} />
      </ScrollView>
      <View style={styles.wrapContainer}>
        <Buttons title="Masukkan Keranjang" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default DetailProduk;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
  },
  wrapContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
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
    paddingTop: 5,
  },
  txtStok: {
    fontSize: 12,
    fontWeight: '400',
    color: '#565656',
    paddingTop: 14,
  },
  imgMekanik: {
    width: '100%',
    height: 300,
  },
  txtInformasi: {
    fontSize: 14,
    fontWeight: '500',
    color: '#313131',
  },
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
  txtStatus: {
    fontSize: 14,
    fontWeight: '500',
    color: '#27AE60',
  },
  txtDeskripsi: {
    fontSize: 14,
    fontWeight: '400',
    color: '#313131',
  },
  txtAlert: {
    fontSize: 12,
    fontWeight: '300',
    color: '#AEAEAE',
  },
  imgBukti: {
    width: 130,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
  wrapBtn: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
