import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {EditPhoto, people} from '../../assets';
import {Gap, Input} from '../../components/atoms';
import {Headers} from '../../components/molecules';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Headers title="Profile" onPress={() => navigation.goBack('')} />
      <View style={styles.wrapContainer}>
        <TouchableOpacity
          style={styles.editprofiles}
          onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.txtEdit}>Edit Profile</Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity>
            <Image source={people} style={styles.photoContainer} />
            <EditPhoto style={styles.iconPhoto} />
          </TouchableOpacity>
        </View>
        <Gap height={40} />
        <Input title="Nama lengkap" disable value="Mvafjhegfh" />
        <Gap height={15} />
        <Input title="Email" disable />
        <Gap height={15} />
        <Input title="No Handphone" disable />
        <Gap height={15} />
        <Input title="Alamat" disable />
      </View>
    </View>
  );
};

export default Profile;

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
