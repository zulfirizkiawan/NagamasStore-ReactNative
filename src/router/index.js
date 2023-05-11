import React from 'react';
import {BottomNavigator} from '../components';
import {
  Akun,
  Beranda,
  Berhasil,
  DetailGaleri,
  DetailMekanik,
  DetailProduk,
  EditProfile,
  Galeri,
  Keranjang,
  Login,
  Mekanik,
  Pembayaran,
  Pesanan,
  PesananDetailMekanik,
  PesananDetailProduct,
  PesananMekanik,
  PesananProduct,
  Profile,
  PusatBantuan,
  Register,
  SplashScreen,
  Tentang,
} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Mekanik"
        component={Mekanik}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Galeri"
        component={Galeri}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="  Akun   "
        component={Akun}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailMekanik"
        component={DetailMekanik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Berhasil"
        component={Berhasil}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailGaleri"
        component={DetailGaleri}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailProduk"
        component={DetailProduk}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Keranjang"
        component={Keranjang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pembayaran"
        component={Pembayaran}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PesananMekanik"
        component={PesananMekanik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PesananProduct"
        component={PesananProduct}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PesananDetailMekanik"
        component={PesananDetailMekanik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PesananDetailProduct"
        component={PesananDetailProduct}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tentang"
        component={Tentang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PusatBantuan"
        component={PusatBantuan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
