import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gap} from '../../atoms';

const PesananCardMekanik = ({image, status, onPress}) => {
  const getStatusColor = status => {
    switch (status) {
      case 'Pending':
        return '#F2B200';
      case 'Proses':
        return '#1565C0';
      case 'Kirim':
        return '#1565C0';
      case 'Selesai':
        return '#27AE60';
      default:
        return '#C10F0F';
    }
  };
  return (
    <TouchableOpacity style={styles.mekanik} onPress={onPress}>
      <View style={styles.wrapMekanik}>
        <Text>Status</Text>
        <Text
          style={[
            styles.statusText,
            {backgroundColor: getStatusColor(status)},
          ]}>
          {status}
        </Text>
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
  statusText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
});
