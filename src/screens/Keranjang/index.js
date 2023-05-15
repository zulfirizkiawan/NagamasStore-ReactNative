import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Buttons, CardKeranjang, Headers, Number} from '../../components';
import {Nippon} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {deleteCartAction, getCartData, refreshCart} from '../../redux/action';
import {getData} from '../../utils';

const Keranjang = ({navigation}) => {
  const [totalItem, setTotalItem] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const {cart, refresh} = useSelector(state => state.cartReducer);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData('userProfile').then(res => {
        setUserProfile(res);
      });
    });
  }, [navigation]);

  //untuk refresh produk pada halaman keranjang
  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getCartData());
    setRefreshing(false);
  };

  const dispatch = useDispatch();

  // untuk memanggil data produk yang telah di tambahkan pada halaman keranjang
  useEffect(() => {
    if (refresh) {
      dispatch(refreshCart());
      dispatch(getCartData());
    }
  }, [refresh, dispatch]);

  // menghapus list produk pada halaman keranjang
  const removeProduct = productId => {
    dispatch(deleteCartAction(productId));
  };

  // untuk menambah atau mengurangi jumlah item pada produk
  const onCounterChange = value => {
    setTotalItem(value);
  };

  // untuk menghitung total harga dari semua produk pada halaman keranjang
  const calculateTotalPrice = (cart, totalItem) => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      totalPrice += item.price * totalItem;
    }
    return totalPrice;
  };

  const totalHarga = calculateTotalPrice(cart, totalItem);

  return (
    <View style={styles.container}>
      <Headers title="Keranjang" onPress={() => navigation.goBack('')} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.wrapContainer}>
          {cart.map(itemCart => {
            return (
              <CardKeranjang
                key={itemCart.id}
                image={{uri: itemCart.product.productPhotoPath ?? Nippon}}
                product={itemCart.product.name ?? ''}
                price={itemCart.price}
                onValueChange={onCounterChange}
                onPress={() => removeProduct(itemCart.id)}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.wrapBtn}>
        <View>
          <Text>Total harga</Text>
          <Number style={styles.titlePrice} number={totalHarga} />
        </View>
        <TouchableOpacity
          style={styles.BtnLogin}
          onPress={() =>
            navigation.navigate('Pembayaran', {
              cart,
              userProfile,
            })
          }>
          <Text style={styles.TxtLogin}>Pembayaran</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Keranjang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
  },
  wrapContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  wrapBtn: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titlePrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333333',
  },
  BtnLogin: {
    backgroundColor: '#335C32',
    paddingVertical: 13,
    borderRadius: 7,
    width: '70%',
  },
  TxtLogin: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 1,
  },
});
