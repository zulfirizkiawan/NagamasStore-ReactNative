import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gap} from '../../components';
import {MekanikRepair, ProductPesanan} from '../../assets';

const Pesanan = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <Text style={styles.titleAkun}>Pesanan</Text>
      </View>
      <Gap height={10} />
      <View style={styles.wrapCard}>
        <TouchableOpacity onPress={() => navigation.navigate('PesananProduct')}>
          <View style={styles.cardPesanan}>
            <Image source={ProductPesanan} style={styles.img} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PesananMekanik')}>
          <View style={styles.cardPesanan}>
            <Image source={MekanikRepair} style={styles.img} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pesanan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
  },
  wrapContainer: {
    backgroundColor: 'white',
    padding: 20,
  },
  titleAkun: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    alignSelf: 'center',
  },
  cardPesanan: {
    backgroundColor: 'white',
    height: 170,
    width: 170,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 105,
    width: 105,
  },
  wrapCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
