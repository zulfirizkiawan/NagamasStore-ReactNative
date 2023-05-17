import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gap} from '../../atoms';

const PesananCardMekanik = ({image, status, onPress}) => {
  const getStatusText = () => {
    if (status === 'Pending' || 'pending') {
      return <Text style={styles.pending}>Pending</Text>;
    }
    if (status === 'Proses' || 'proses') {
      return <Text style={styles.proses}>Proses</Text>;
    }
    if (status === 'Selesai' || 'selesai') {
      return <Text style={styles.selesai}>Selesai</Text>;
    }
    if (status === 'Batal' || 'batal') {
      return <Text style={styles.batal}>Batal</Text>;
    }
  };

  const statusText = getStatusText();

  return (
    <TouchableOpacity style={styles.mekanik} onPress={onPress}>
      <View style={styles.wrapMekanik}>
        <Text>Status</Text>
        <Text style={styles.status(status)}>{status}</Text>
      </View>
      <Gap height={10} />
      <Image source={image} style={styles.imgMekanik} />
    </TouchableOpacity>
  );
};

export default PesananCardMekanik;

const styles = StyleSheet.create({
  mekanik: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  wrapMekanik: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgMekanik: {
    width: 300,
    height: 90,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  pending: {
    color: 'white',
    backgroundColor: '#F2B200',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  proses: {
    color: 'white',
    backgroundColor: '#1565C0',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  selesai: {
    color: 'white',
    backgroundColor: '#27AE60',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  txtStatus: {
    color: 'white',
    // backgroundColor: '#C10F0F',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  status: status => ({
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
    // color: status === 'CANCELLED' ? '#D9435E' : '#1ABC9C',
    backgroundColor:
      status === 'Pending'
        ? '#F2B200'
        : 'Proses'
        ? '#1565C0'
        : 'Selesai'
        ? '#27AE60'
        : '#C10F0F',
  }),
});
