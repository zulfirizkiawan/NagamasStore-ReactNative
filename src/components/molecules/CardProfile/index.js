import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {people} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {getData} from '../../../utils';

const CardProfile = ({image, name, email}) => {
  return (
    <View style={styles.wrapAkun}>
      <Image source={image} style={styles.photo} />
      <View style={styles.wrapEmail}>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.nama}>{name}</Text>
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
