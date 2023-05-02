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

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.txtlogin}>Login</Text>
        <Image source={login} style={styles.logins} />
        <Gap height={50} />
        <Input title="Email" />
        <Gap height={15} />
        <Input title="Password" secureTextEntry />
        <Gap height={30} />
        <Buttons title="Login" onPress={() => navigation.replace('MainApp')} />
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
