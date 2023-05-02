import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardMekanik, CardProfile, Gap} from '../../components';
import {Garage1, Garage2} from '../../assets';

const Mekanik = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CardProfile />
      <Text style={styles.titleProduk}>Mekanik</Text>
      <Gap height={20} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardMekanik
          image={Garage1}
          onPress={() => navigation.navigate('DetailMekanik')}
          kategori="Mobil"
        />
        <CardMekanik image={Garage2} kategori="Bus" />
        <CardMekanik image={Garage1} kategori="Truck" />
        <CardMekanik image={Garage2} kategori="Pick Up" />
      </ScrollView>
      <Gap height={20} />
    </View>
  );
};

export default Mekanik;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
    paddingHorizontal: 20,
  },
  titleProduk: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
});
