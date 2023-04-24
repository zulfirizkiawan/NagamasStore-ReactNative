import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {berhasil} from '../../assets';
import {Buttons, Gap} from '../../components';

const Berhasil = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <Text style={styles.pesanan}>Pesanan</Text>
        <Text style={styles.berhasil}>Berhasil</Text>
      </View>
      <Image source={berhasil} style={styles.logo} />
      <Gap height={20} />
      <Buttons
        title="Kembali ke Beranda"
        onPress={() =>
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
        }
      />
    </View>
  );
};

export default Berhasil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  logo: {
    width: 400,
    height: 300,
  },
  wrapContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  pesanan: {
    fontSize: 24,
    fontWeight: '500',
    color: '#313131',
    marginRight: 5,
  },
  berhasil: {
    fontSize: 24,
    fontWeight: '500',
    color: '#27AE60',
  },
});
