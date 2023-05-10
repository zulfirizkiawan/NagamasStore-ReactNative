import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Headers, ItemOutput} from '../../components';
import {Paint} from '../../assets';

const DetailGaleri = ({navigation, route}) => {
  const galery = route.params;
  return (
    <View style={styles.container}>
      <Headers title="Detail Galeri" onPress={() => navigation.goBack('')} />
      <ScrollView>
        <Gap height={10} />
        <Image source={Paint} style={styles.imgMekanik} />
        <View style={styles.wrapContainer}>
          <Text style={styles.txtInformasi}>Informasi Galeri</Text>
          <Gap height={8} />
          <ItemOutput title="jenis Repaint" result={galery.repair_type} />
        </View>
        <Gap height={10} />
        <View style={styles.wrapContainer}>
          <Text style={styles.txtInformasi}>Deskripsi Mekanik</Text>
          <Gap height={5} />
          <Text style={styles.txtDeskripsi}>{galery.description}</Text>
          <Gap height={10} />
          <Text style={styles.txtInformasi}>Bahan</Text>
          <Gap height={5} />
          {galery.products.map(productGalery => {
            return (
              <View style={styles.wrapBahan} key={productGalery.id}>
                <View style={styles.dot} />
                <Text style={styles.txtDeskripsi}>{productGalery.name}</Text>
              </View>
            );
          })}

          <Gap height={10} />
          <Text style={styles.txtInformasi}>Rekomendasi Mekanik</Text>
          <Gap height={5} />
          <Text style={styles.txtDeskripsi}>
            {galery.mechanic_recommendation}
          </Text>
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
  dot: {
    backgroundColor: 'black',
    height: 7,
    width: 7,
    borderRadius: 5,
    marginRight: 10,
  },
  wrapBahan: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
