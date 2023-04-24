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

const PesananDetailMekanik = ({navigation}) => {
  const status = 'Pending';
  const getStatusText = () => {
    if (status === 'Pending') {
      return <Text style={styles.pending}>Pending</Text>;
    }
    if (status === 'Proses') {
      return <Text style={styles.proses}>Proses</Text>;
    }
    if (status === 'Selesai') {
      return <Text style={styles.selesai}>Selesai</Text>;
    }
    if (status === 'Batal') {
      return <Text style={styles.batal}>Batal</Text>;
    }
  };

  const statusText = getStatusText();

  return (
    <View style={styles.container}>
      <Headers
        title="Detail Pesanan Mekanik"
        onPress={() => navigation.goBack('')}
      />
      <ScrollView>
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Image source={Garage1} style={styles.imgMekanik} />
          <View style={styles.wrapInformasi}>
            <Text style={styles.txtMekanik}>Status</Text>
            {statusText}
          </View>
          <Text style={styles.txtInformasi}>Informasi Mekanik</Text>
          <Gap height={8} />
          <Text style={styles.txtMekanik}>Beddis Road garage</Text>
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

        <View style={styles.wrapContainer}>
          <Gap height={20} />
          <Text style={styles.txtInformasi}>Bukti Pembayaran</Text>
          <Text style={styles.txtAlert}>
            Upload bukti transfer sesuai total harga dan isi data bank anda
          </Text>
          <Gap height={10} />
          <View style={styles.wrapInformasi}>
            <Image source={Transfer} style={styles.imgBukti} />
            <View style={styles.container}>
              <Input title="Nama rekening anda" disable />
              <Gap height={10} />
              <Input title="Bank anda" disable />
              <Gap height={10} />
              <Input title="No rekening anda" disable />
            </View>
          </View>
          <Gap height={20} />
        </View>
        <Gap height={10} />
      </ScrollView>
    </View>
  );
};

export default PesananDetailMekanik;

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
  pending: {
    color: '#F2B200',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  proses: {
    color: '#1565C0',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  selesai: {
    color: '#27AE60',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  batal: {
    color: '#C10F0F',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
});
