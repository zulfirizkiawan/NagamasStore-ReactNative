import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  Buttons,
  CardPembayaran,
  Gap,
  Headers,
  InformasiPembayaran,
  Input,
  ItemOutput,
} from '../../components';
import {Nippon, Transfer} from '../../assets';

const Pembayaran = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Headers title="Pembayaran" onPress={() => navigation.goBack('')} />
      <ScrollView>
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Text style={styles.txtInformasi}>Informasi Pemesanan</Text>
          <CardPembayaran
            image={Nippon}
            product="Cat Nippen 2000"
            price={20000}
            item={1}
          />
          <CardPembayaran
            image={Nippon}
            product="Cat Nippen 2000"
            price={20000}
            item={1}
          />
          <Gap height={10} />
          <ItemOutput title="Total Harga" result={'Rp 75.000'} />
        </View>
        <Gap height={10} />
        <InformasiPembayaran />
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Text style={styles.txtInformasi}>Bukti Pembayaran</Text>
          <Text style={styles.txtAlert}>
            Upload bukti transfer sesuai total harga dan isi data bank anda
          </Text>
          <Gap height={10} />
          <View style={styles.wrapInformasi}>
            <TouchableOpacity>
              <Image source={Transfer} style={styles.imgBukti} />
            </TouchableOpacity>
            <View style={styles.container}>
              <Input title="Nama rekening anda" />
              <Gap height={10} />
              <Input title="Bank anda" />
              <Gap height={10} />
              <Input title="No rekening anda" />
            </View>
          </View>
        </View>
        <Gap height={10} />
      </ScrollView>
      <View style={styles.wrapContainer}>
        <Buttons
          title="Masukkan Keranjang"
          onPress={() => navigation.navigate('Berhasil')}
        />
      </View>
    </View>
  );
};

export default Pembayaran;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapContainer: {
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
  wrapInformasi: {
    flexDirection: 'row',
    backgroundColor: 'white',
    // padding: 20,
  },
  imgBukti: {
    width: 130,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
  wrapPembayaran: {
    flex: 1,
  },
});
