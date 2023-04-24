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
  Gap,
  Headers,
  InformasiPembayaran,
  Input,
  ItemOutput,
} from '../../components';
import {Garage1, Transfer} from '../../assets';

const DetailMekanik = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Headers title="Detail Mekanik" onPress={() => navigation.goBack('')} />
      <ScrollView>
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Image source={Garage1} style={styles.imgMekanik} />
          <Text style={styles.txtInformasi}>Informasi Mekanik</Text>
          <Gap height={8} />
          <View style={styles.wrapInformasi}>
            <Text style={styles.txtMekanik}>Beddis Road garage</Text>
            <Text style={styles.txtStatus}>Tersedia</Text>
          </View>
          <ItemOutput title="Harga Sewa" result={'Rp 400.000'} />
          <Gap height={20} />
        </View>
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Gap height={20} />
          <Text style={styles.txtInformasi}>Deskripsi Mekanik</Text>
          <Gap height={10} />
          <Text style={styles.txtDeskripsi}>
            Mekanik ini sudah berjalan selama 10 th dan sudah dipercaya dari
            sabang sampai merauke
          </Text>
          <Gap height={20} />
        </View>
        <Gap height={10} />
        <InformasiPembayaran />
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Gap height={20} />
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
          <Gap height={20} />
        </View>
        <Gap height={10} />
      </ScrollView>

      <View style={styles.wrapBtn}>
        <Buttons
          title="Sewa Sekarang"
          onPress={() => navigation.navigate('Berhasil')}
        />
      </View>
    </View>
  );
};

export default DetailMekanik;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  imgMekanik: {
    width: '100%',
    height: 100,
    marginVertical: 20,
  },
  txtInformasi: {
    fontSize: 14,
    fontWeight: '500',
    color: '#313131',
  },
  wrapInformasi: {
    flexDirection: 'row',
    marginTop: 5,
  },
  txtMekanik: {
    fontSize: 14,
    fontWeight: '400',
    color: '#313131',
    flex: 1,
  },
  txtHasilMekanik: {
    fontSize: 14,
    fontWeight: '500',
    color: '#313131',
  },
  txtStatus: {
    fontSize: 14,
    fontWeight: '500',
    color: '#27AE60',
  },
  txtDeskripsi: {
    fontSize: 14,
    fontWeight: '400',
    color: '#313131',
  },
  txtAlert: {
    fontSize: 12,
    fontWeight: '300',
    color: '#AEAEAE',
  },
  imgBukti: {
    width: 130,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
  wrapBtn: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
