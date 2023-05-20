import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gap} from '../../atoms';

const PesananCardMekanik = ({image, status, onPress}) => {
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
  status: status => ({
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
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
