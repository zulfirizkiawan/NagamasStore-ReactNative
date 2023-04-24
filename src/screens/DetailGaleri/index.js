import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Headers, ItemOutput} from '../../components';
import {Paint} from '../../assets';

const DetailGaleri = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Headers title="Detail Galeri" onPress={() => navigation.goBack('')} />
      <ScrollView>
        <Gap height={10} />
        <Image source={Paint} style={styles.imgMekanik} />
        <View style={styles.wrapContainer}>
          <Text style={styles.txtInformasi}>Informasi Galeri</Text>
          <Gap height={8} />
          <ItemOutput title="jenis Repaint" result="Repaint Green Glosy" />
        </View>
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Text style={styles.txtInformasi}>Deskripsi Mekanik</Text>
          <Gap height={5} />
          <Text style={styles.txtDeskripsi}>
            Mekanik ini sudah berjalan selama 10 th dan sudah dipercaya dari
            sabang sampai merauke
          </Text>
          <Gap height={10} />
          <Text style={styles.txtInformasi}>Bahan</Text>
          <Gap height={5} />
          <Text style={styles.txtDeskripsi}>1. Cat Nippen Paint Green</Text>
          <Text style={styles.txtDeskripsi}>2. Powder</Text>
          <Text style={styles.txtDeskripsi}>3. Cat GLowsy</Text>
          <Gap height={10} />
          <Text style={styles.txtInformasi}>Rekomendasi Mekanik</Text>
          <Gap height={5} />
          <Text style={styles.txtDeskripsi}>Beddis Road Garage</Text>
        </View>

        <Gap height={10} />
      </ScrollView>
    </View>
  );
};

export default DetailGaleri;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  imgMekanik: {
    width: '100%',
    height: 300,
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
