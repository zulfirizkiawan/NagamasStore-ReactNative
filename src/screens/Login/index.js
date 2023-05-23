import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {login} from '../../assets';
import {Buttons, Gap, Input} from '../../components/atoms';
import {useForm} from '../../utils';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setLoading, signInAction} from '../../redux/action';

const Login = ({navigation}) => {
  const [form, setFrom] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(signInAction(form, navigation));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.txtlogin}>Login</Text>
        <Image source={login} style={styles.logins} />
        <Gap height={30} />
        <Input
          title="Email"
          value={form.email}
          onChangeText={value => setFrom('email', value)}
        />
        <Gap height={5} />
        <Input
          title="Password"
          secureTextEntry
          value={form.password}
          onChangeText={value => setFrom('password', value)}
        />
        <Gap height={30} />
        <Buttons title="Login" onPress={onSubmit} />
        <Gap height={15} />
        <View style={styles.wrapRegister}>
          <Text style={styles.txtbelum}>Belum memiliki akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.txtRegister}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  txtlogin: {
    fontSize: 18,
    color: '#313131',
    fontWeight: '500',
    marginTop: 30,
  },
  logins: {
    width: 300,
    height: 150,
    alignSelf: 'center',
    marginTop: 40,
  },
  wrapRegister: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtbelum: {
    fontSize: 16,
    color: '#313131',
    marginRight: 5,
  },
  txtRegister: {
    fontSize: 16,
    color: '#335C32',
  },
});
