import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {people} from '../../../assets';

const CardProfile = () => {
  return (
    <View style={styles.wrapAkun}>
      <Image source={people} style={styles.photo} />
      <View style={styles.wrapEmail}>
        <Text style={styles.email}>Djaja@gmail.com</Text>
        <Text style={styles.nama}>Djaja Suparman</Text>
      </View>
    </View>
  );
};

export default CardProfile;

const styles = StyleSheet.create({
  photo: {
    height: 66,
    width: 66,
    borderRadius: 66 / 2,
  },
  wrapAkun: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
  },
  wrapEmail: {
    paddingLeft: 20,
  },
  email: {
    fontSize: 14,
    color: '#282828',
    fontWeight: '400',
  },
  nama: {
    fontSize: 18,
    color: '#335C32',
    fontWeight: '600',
  },
});
