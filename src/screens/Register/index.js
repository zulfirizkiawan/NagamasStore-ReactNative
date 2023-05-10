import {
  Image,
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
import {setLoading, signUpAction} from '../../redux/action';
import {useDispatch} from 'react-redux';

const Register = ({navigation}) => {
  const [form, setFrom] = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone_number: '',
    address: '',
    role_id: 2,
  });
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(setLoading(true));
    dispatch(signUpAction(form, navigation));
    console.log('form register:', form);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.txtlogin}>Register</Text>
        <Image source={login} style={styles.logins} />
        <Gap height={20} />
        <Input
          title="Nama lengkap"
          value={form.name}
          onChangeText={value => setFrom('name', value)}
        />
        <Gap height={15} />
        <Input
          title="Email"
          value={form.email}
          onChangeText={value => setFrom('email', value)}
        />
        <Gap height={15} />
        <Input
          title="Password"
          secureTextEntry
          value={form.password}
          onChangeText={value => setFrom('password', value)}
        />
        <Gap height={15} />
        <Input
          title="Password Konfirmasi"
          secureTextEntry
          value={form.password_confirmation}
          onChangeText={value => setFrom('password_confirmation', value)}
        />
        <Gap height={15} />
        <Input
          title="No Handphone"
          keyboardType="numeric"
          value={form.phone_number}
          onChangeText={value => setFrom('phone_number', value)}
        />
        <Gap height={15} />
        <Input
          title="Alamat"
          value={form.address}
          onChangeText={value => setFrom('address', value)}
        />
        <Gap height={30} />
        <Buttons title="Register" onPress={onSubmit} />
        <Gap height={15} />
        <View style={styles.wrapRegister}>
          <Text style={styles.txtbelum}>Sudah memiliki akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.txtRegister}>Login</Text>
          </TouchableOpacity>
        </View>
        <Gap height={30} />
      </ScrollView>
    </View>
  );
};

export default Register;

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
    marginTop: 20,
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
