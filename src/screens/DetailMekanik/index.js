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
  Number,
} from '../../components';
import {Garage1, Transfer} from '../../assets';
import {useForm} from '../../utils';

const DetailMekanik = ({navigation, route}) => {
  const mekanik = route.params;
  console.log('wew', mekanik);

  const textStyle = mekanik.status === '0' ? styles.redText : styles.greenText;

  const [form, setFrom] = useForm({
    mekanik_id: mekanik.id,
    namaRekening: '',
    bankAnda: '',
    NoRek: '',
  });

  const onSubmit = () => {
    console.log('form', form);
  };

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
            <Text style={styles.txtMekanik}>{mekanik.name}</Text>
            <Text style={[styles.txtStatus, textStyle]}>
              {mekanik.status === '0' ? 'Tidak Tersedia' : 'Tersedia'}
            </Text>
          </View>
          <ItemOutput title="Kategori" result={mekanik.category} />
          <View style={styles.wrapInformasi}>
            <Text style={styles.txtMekanik}>Harga Sewa</Text>
            <Number
              number={20000}
              style={{color: '#313131', fontSize: 14, fontWeight: '500'}}
            />
          </View>
          <Gap height={20} />
        </View>
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Gap height={20} />
          <Text style={styles.txtInformasi}>Deskripsi Mekanik</Text>
          <Gap height={10} />
          <Text style={styles.txtDeskripsi}>{mekanik.description}</Text>
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
              <Input
                title="Nama rekening anda"
                value={form.namaRekening}
                onChangeText={value => setFrom('namaRekening', value)}
              />
              <Gap height={10} />
              <Input
                title="Bank anda"
                value={form.bankAnda}
                onChangeText={value => setFrom('bankAnda', value)}
              />
              <Gap height={10} />
              <Input
                title="No rekening anda"
                value={form.NoRek}
                onChangeText={value => setFrom('NoRek', value)}
              />
            </View>
          </View>
          <Gap height={20} />
        </View>
        <Gap height={10} />
      </ScrollView>

      <View style={styles.wrapBtn}>
        <Buttons title="Sewa Sekarang" onPress={onSubmit} />
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
  },
  redText: {
    color: 'red',
  },
  greenText: {
    color: 'green',
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
