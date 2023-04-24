import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ItemOutput} from '../../atoms';

const InformasiPembayaran = () => {
  return (
    <View style={styles.wrapInformasi}>
      <Text style={styles.txtInformasi}>Informasi Pembayaran</Text>
      <Text style={styles.txtAlert}>
        Transfer pada bank yang ada dibawah ini
      </Text>
      <ItemOutput title="Nama Pemilik" result="Djaja Suparman" />
      <ItemOutput title="Nama Bank" result="BRI" />
      <ItemOutput title="No Rekening" result="9867268472422" />
    </View>
  );
};

export default InformasiPembayaran;

const styles = StyleSheet.create({
  wrapInformasi: {
    backgroundColor: 'white',
    padding: 20,
  },
  txtInformasi: {
    fontSize: 14,
    fontWeight: '500',
    color: '#313131',
  },
  txtAlert: {
    fontSize: 12,
    fontWeight: '300',
    color: '#AEAEAE',
  },
});
