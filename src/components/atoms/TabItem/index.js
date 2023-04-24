import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  AkunNon,
  AkunAktif,
  BerandaAktif,
  GaleriAktif,
  MekanikAktif,
  PesananAktif,
  BerandaNon,
  MekanikNon,
  GaleriNon,
  PesananNon,
} from '../../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Beranda') {
      return active ? <BerandaAktif /> : <BerandaNon />;
    }
    if (title === 'Mekanik') {
      return active ? <MekanikAktif /> : <MekanikNon />;
    }
    if (title === 'Galeri') {
      return active ? <GaleriAktif /> : <GaleriNon />;
    }
    if (title === 'Pesanan') {
      return active ? <PesananAktif /> : <PesananNon />;
    }
    if (title === '  Akun   ') {
      return active ? <AkunAktif /> : <AkunNon />;
    }
    return <BerandaAktif />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 12,
    color: active ? '#335C32' : '#313131',
    marginTop: 3,
  }),
});
