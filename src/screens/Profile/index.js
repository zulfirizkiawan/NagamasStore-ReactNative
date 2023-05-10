import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {EditPhoto, people} from '../../assets';
import {Gap, Input} from '../../components/atoms';
import {Headers} from '../../components/molecules';
import {getData, showMessage, storeData} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import ImageCropPicker from 'react-native-image-crop-picker';

const Profile = () => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(people);
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

  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxWidth: 200,
      maxHeight: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
    },
  };

  const updatePhoto = async () => {
    // const images = await launchImageLibrary(options);
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: 'photo',
      includeBase64: true,
    }).then(images => {
      console.log('response', images);
      const dataImage = {
        uri: images.path,
        type: images.mime,
        name: 'profile_pic.jpeg',
      };
      console.log('data Image :', dataImage);
      const photoForUpload = new FormData();
      photoForUpload.append('profilePhotoPath', dataImage);
      // photoForUpload.append('_method', 'PATCH');
      console.log('photoForUpload :', photoForUpload);
      getData('token').then(resToken => {
        getData('userProfile').then(resProfile => {
          fetch(
            `https://nagamas.kazuhaproject.com/api/v1/user/${resProfile.id}/photo`,
            {
              method: 'PATCH',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                Authorization: resToken.value,
              },
              body: photoForUpload,
            },
          )
            .then(response => response.json())
            .then(responseJson => {
              console.log('response:', responseJson.data);
              // getData('userProfile').then(resUser => {
              //   showMessage('Update Photo Berhasil', 'success');
              //   resUser.profile_photo_url = `https://nagamas.kazuhaproject.com/storage/${responseJson.data[0]}`;
              //   storeData('userProfile', resUser).then(() => {
              //     updateUserProfile();
              //   });
              // });
            })
            .catch(err => {
              console.log('error :', err);
              // showMessage('Terjadi kesalahan di API Update Photo');
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
            <Image
              source={{uri: userProfile.profilePhotoPath}}
              style={styles.photoContainer}
            />
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
