import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Headers, PesananProductTabSection} from '../../components';

const PesananProduct = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Headers title="Pesanan Produk" onPress={() => navigation.goBack('')} />
      <PesananProductTabSection />
    </View>
  );
};

export default PesananProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
  },
});
