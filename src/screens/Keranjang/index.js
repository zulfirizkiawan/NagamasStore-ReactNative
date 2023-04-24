import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Buttons, CardKeranjang, Headers} from '../../components';
import {Nippon} from '../../assets';
import {useState} from 'react';

const Keranjang = ({navigation}) => {
  const [totalItem, setTotalItem] = useState(1);

  const onCounterChange = value => {
    setTotalItem(value);
  };
  return (
    <View style={styles.container}>
      <Headers title="Keranjang" onPress={() => navigation.goBack('')} />
      <ScrollView>
        <View style={styles.wrapContainer}>
          <CardKeranjang
            image={Nippon}
            product="Cat Nippen 2000"
            price={20000}
            onValueChange={onCounterChange}
          />
          <CardKeranjang
            image={Nippon}
            product="Cat Nippen 2000"
            price={20000}
            onValueChange={onCounterChange}
          />
          <CardKeranjang
            image={Nippon}
            product="Cat Nippen 2000"
            price={20000}
            onValueChange={onCounterChange}
          />
        </View>
      </ScrollView>
      <View style={styles.wrapBtn}>
        <View>
          <Text>Total harga</Text>
          <Text style={styles.titlePrice}>Rp 75.000</Text>
        </View>
        <TouchableOpacity
          style={styles.BtnLogin}
          onPress={() => navigation.navigate('Pembayaran')}>
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
