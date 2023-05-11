import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Stiki, logo} from '../../assets';
import {Gap, Headers} from '../../components';

const Tentang = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Headers title="Tentang Kami" onPress={() => navigation.goBack('')} />
      <View style={styles.wrapContainer}>
        <Image source={logo} style={styles.logo} />
        <Gap height={10} />
        <Text style={styles.txtVersion}>Versi 1.0</Text>
        <Gap height={30} />
        <Image source={Stiki} style={styles.stiki} />
        <Gap height={10} />
        <Text style={styles.txtStiki}>Support By STIKI MALANG</Text>
      </View>
      <Gap height={50} />
    </View>
  );
};

export default Tentang;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  wrapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 300,
    height: 220,
  },
  stiki: {
    width: 150,
    height: 150,
  },
  txtVersion: {
    fontSize: 12,
    color: '#333333',
  },
  txtStiki: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  },
});
