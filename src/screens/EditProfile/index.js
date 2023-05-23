import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Buttons, Gap, Input} from '../../components/atoms';
import {Headers} from '../../components/molecules';
import {getData, showMessage, storeData, useForm} from '../../utils';
import Axios from 'axios';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../redux/action';

const EditProfile = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    phone_number: '',
    email: '',
    address: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (form.email && !form.email.includes('@gmail.com')) {
      showMessage('Email harus menggunakan format @gmail.com', 'warning');
      return;
    }

    let resultObj = {};
    Object.keys(form).map(obj => {
      if (form[obj]) {
        resultObj[obj] = form[obj];
      }
    });
    getData('token').then(resToken => {
      dispatch(setLoading(true));
      Axios.patch(`https://nagamas.kazuhaproject.com/api/v1/user`, resultObj, {
        headers: {
          Authorization: resToken.value,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          dispatch(setLoading(false));
          showMessage('Berhasil Diperbarui', 'success');
          storeData('userProfile', res.data.data).then(() => {
            navigation.replace('MainApp', {screen: '  Akun   '});
          });
        })
        .catch(err => {
          dispatch(setLoading(false));
          showMessage('Gagal dalam melakukan update profile');
        });
    });
  };

  return (
    <View style={styles.container}>
      <Headers title="Edit Profile" onPress={() => navigation.goBack('')} />
      <View style={styles.wrapContainer}>
        <Gap height={40} />
        <Input
          title="Nama lengkap"
          value={form.name}
          onChangeText={value => setForm('name', value)}
        />
        <Gap height={5} />
        <Input
          title="Email"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={5} />
        <Input
          title="No Handphone"
          keyboardType="numeric"
          value={form.phone_number}
          onChangeText={value => setForm('phone_number', value)}
        />
        <Gap height={5} />
        <Input
          title="Alamat"
          value={form.address}
          onChangeText={value => setForm('address', value)}
        />
        <Gap height={40} />
        <Buttons title="Simpan" onPress={onSubmit} />
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
