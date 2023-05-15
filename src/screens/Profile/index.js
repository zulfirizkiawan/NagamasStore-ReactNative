import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {EditPhoto, PhotoUser, people} from '../../assets';
import {Gap, Input} from '../../components/atoms';
import {Headers} from '../../components/molecules';
import {getData, showMessage, storeData} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const Profile = () => {
  const navigation = useNavigation();
  const [userProfile, setUserProfile] = useState('');

  useEffect(() => {
    navigation.addListener('focus', () => {
      updateUserProfile();
    });
  }, [navigation]);

  const updateUserProfile = () => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  };

  const updatePhoto = async () => {
    ImageCropPicker.openPicker({
      cropping: true,
      mediaType: 'photo',
    }).then(images => {
      console.log('response', images);
      const dataImage = {
        uri: images.path,
        type: 'image/jpg',
        name: 'profile_pic.jpg',
      };
      const photoForUpload = new FormData();
      photoForUpload.append('profilePhotoPath', dataImage);
      getData('token').then(resToken => {
        getData('userProfile').then(resProfile => {
          fetch(
            `https://nagamas.kazuhaproject.com/api/v1/user/${resProfile.id}/photo`,
            {
              method: 'POST',
              headers: {
                Authorization: resToken.value,
              },
              body: photoForUpload,
            },
          )
            .then(response => response.json())
            .then(responseJson => {
              console.log('sukses:', responseJson);
              getData('userProfile').then(resUser => {
                showMessage('Update Photo Berhasil', 'success');
                resUser.profilePhotoPath = responseJson.data.profilePhotoPath;
                storeData('userProfile', resUser).then(() => {
                  updateUserProfile();
                });
              });
            })
            .catch(err => {
              console.log('error :', err);
              showMessage('Terjadi kesalahan di API Update Photo');
            });
        });
      });
    });
  };

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
          <TouchableOpacity onPress={updatePhoto}>
            {userProfile.profilePhotoPath ? (
              <Image
                source={{uri: userProfile.profilePhotoPath}}
                style={styles.photoContainer}
              />
            ) : (
              <PhotoUser
                width={100}
                height={100}
                style={styles.photoContainer}
              />
            )}
            <EditPhoto style={styles.iconPhoto} />
          </TouchableOpacity>
        </View>
        <Gap height={40} />
        <Input title="Nama lengkap" disable value={userProfile.name} />
        <Gap height={15} />
        <Input title="Email" disable value={userProfile.email} />
        <Gap height={15} />
        <Input title="No Handphone" disable value={userProfile.phone_number} />
        <Gap height={15} />
        <Input title="Alamat" disable value={userProfile.address} />
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
    bottom: 5,
    right: 3,
    width: 30,
    height: 30,
  },
  photoContainer: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: '#fff',
    padding: 24,
  },
});
