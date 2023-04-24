import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {CardProduct, CardProfile, Gap} from '../../components';
import {Keranjang, Nippon} from '../../assets';

const Beranda = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CardProfile />
      <View style={styles.wrapTitle}>
        <Text style={styles.titleProduk}>Produk</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Keranjang')}>
          <Keranjang />
        </TouchableOpacity>
      </View>
      <Gap height={20} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapProduct}>
          <CardProduct
            image={Nippon}
            title="Cat Nippen 2000"
            price={20000}
            onPress={() => navigation.navigate('DetailProduk')}
          />
          <CardProduct image={Nippon} title="Cat Nippen 2000" price={20000} />
          <CardProduct image={Nippon} title="Cat Nippen 2000" price={20000} />
          <CardProduct image={Nippon} title="Cat Nippen 2000" price={20000} />
          <CardProduct image={Nippon} title="Cat Nippen 2000" price={20000} />
          <CardProduct image={Nippon} title="Cat Nippen 2000" price={20000} />
          <CardProduct image={Nippon} title="Cat Nippen 2000" price={20000} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
    paddingHorizontal: 20,
  },
  titleProduk: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    flex: 1,
  },
  wrapTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
