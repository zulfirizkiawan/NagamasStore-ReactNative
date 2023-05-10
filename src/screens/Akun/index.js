import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CardProfile, Gap, ItemListAkun} from '../../components';
import {Next, people} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData} from '../../utils';

const Akun = ({navigation}) => {
  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    });
  };

  const [photo, setPhoto] = useState(people);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData('userProfile').then(res => {
        setPhoto({uri: res.profilePhotoPath});
        setUserProfile(res);
      });
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <Gap height={20} />
        <Text style={styles.titleAkun}>Akun</Text>
        <CardProfile
          image={photo}
          name={userProfile.name}
          email={userProfile.email}
        />
      </View>
      <Gap height={20} />
      <View style={styles.wrapContainer}>
        <Gap height={20} />
        <ItemListAkun
          title="Lihat Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <Gap height={20} />
        <ItemListAkun
          title="Tentang Kami"
          onPress={() => navigation.navigate('Tentang')}
        />
        <Gap height={20} />
        <ItemListAkun
          title="Pusat Bantuan"
          onPress={() => navigation.navigate('PusatBantuan')}
        />
        <Gap height={20} />
        <ItemListAkun title="Keluar" onPress={signOut} />
        <Gap height={20} />
      </View>
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
  },
  wrapContainer: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  titleAkun: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    alignSelf: 'center',
  },
  photo: {
    height: 75,
    width: 75,
    borderRadius: 75 / 2,
  },
  wrapAkun: {
    flexDirection: 'row',
    alignItems: 'center',
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
  lihatProfile: {
    fontSize: 14,
    color: '#282828',
    fontWeight: '400',
    flex: 1,
  },
});
