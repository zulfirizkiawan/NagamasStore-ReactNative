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

const PesananDetailMekanik = ({navigation, route}) => {
  const itemMekanik = route.params;

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
            <Text
              style={[
                styles.txtStatus,
                {
                  color:
                    itemMekanik.status === 'Pending'
                      ? '#F2B200'
                      : itemMekanik.status === 'Proses'
                      ? '#1565C0'
                      : itemMekanik.status === 'Selesai'
                      ? '#27AE60'
                      : '#C10F0F',
                },
              ]}>
              {itemMekanik.status}
            </Text>
            {/* {statusText} */}
          </View>
          <Text style={styles.txtInformasi}>Informasi Mekanik</Text>
          <Gap height={8} />
          <Text style={styles.txtMekanik}>{itemMekanik.mechanic.name}</Text>
          <View style={styles.wrapInformasi}>
            <Text style={styles.txtMekanik}>Harga Sewa</Text>
            <Number
              style={styles.txtInformasi}
              number={itemMekanik.total_price}
            />
          </View>
          <Gap height={20} />
        </View>
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Gap height={20} />
          <Text style={styles.txtInformasi}>Deskripsi Mekanik</Text>
          <Gap height={10} />
          <Text style={styles.txtDeskripsi}>
            {itemMekanik.mechanic.description}
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
            <Image
              source={{uri: itemMekanik.purchaseReceiptPath}}
              style={styles.imgBukti}
            />
            <View style={styles.container}>
              <Input
                title="Nama rekening anda"
                disable
                value={itemMekanik.bank_account_name}
              />
              <Gap height={10} />
              <Input
                title="Bank anda"
                disable
                value={itemMekanik.bank_name ?? 'Kosong'}
              />
              <Gap height={10} />
              <Input
                title="No rekening anda"
                disable
                value={itemMekanik.account_number ?? 'Kosong'}
              />
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
  txtStatus: {
    fontSize: 14,
    fontWeight: '500',
  },
});
