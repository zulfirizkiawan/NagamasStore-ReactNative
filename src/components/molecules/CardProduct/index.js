import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gap} from '../../atoms';
import Number from '../Number';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CardProduct = ({image, title, price, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapProduct}>
        <Image source={image} style={styles.imgProduct} />
        <Text style={styles.titleProduct}>{title}</Text>
        <Number number={price} style={styles.titlePrice} />
        <Gap height={10} />
      </View>
    </TouchableOpacity>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  wrapProduct: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: 'white',
    width: wp('45%'),
  },
  imgProduct: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleProduct: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333333',
    paddingTop: 8,
    paddingLeft: 8,
  },
  titlePrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333333',
    paddingTop: 5,
    paddingLeft: 8,
  },
});
