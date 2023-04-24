import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Minus, Nippon, Plus, Trash} from '../../../assets';
import {Gap} from '../../atoms';
import {useState, useEffect} from 'react';

const Cardkeranjang = ({product, image, price, onValueChange}) => {
  const [stok, setStok] = useState(1);

  useEffect(() => {
    onValueChange(stok);
  }, []);

  const onCount = type => {
    let result = stok;
    if (type === 'plus') {
      result = stok + 1;
    }
    if (type === 'minus') {
      if (stok > 1) {
        result = stok - 1;
      }
    }
    setStok(result);
    onValueChange(result);
  };
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <View style={styles.wrapContainer}>
        <Text style={styles.titleProduct}>{product}</Text>
        <View style={styles.wrapPrice}>
          <Text style={styles.titlePrice}>Rp {price}</Text>
          <View style={styles.wrapBtn}>
            <TouchableOpacity>
              <Trash />
            </TouchableOpacity>
            <Gap width={10} />
            <TouchableOpacity onPress={() => onCount('minus')}>
              <Minus />
            </TouchableOpacity>
            <Gap width={8} />
            <Text style={styles.txtStok}>{stok}</Text>
            <Gap width={8} />
            <TouchableOpacity onPress={() => onCount('plus')}>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cardkeranjang;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
