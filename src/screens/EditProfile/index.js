import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Input} from '../../components/atoms';
import {Headers} from '../../components/molecules';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Headers title="Edit Profile" onPress={() => navigation.goBack('')} />
      <View style={styles.wrapContainer}>
        <Gap height={40} />
        <Input title="Nama lengkap" />
        <Gap height={15} />
        <Input title="Email" />
        <Gap height={15} />
        <Input title="No Handphone" />
        <Gap height={15} />
        <Input title="Alamat" />
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapContainer: {
    paddingHorizontal: 20,
  },
  editprofiles: {
    alignItems: 'flex-end',
  },
  txtEdit: {
    fontSize: 14,
    color: '#333333',
  },
  iconPhoto: {
    width: 24,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#fff',
    padding: 24,
  },
});
