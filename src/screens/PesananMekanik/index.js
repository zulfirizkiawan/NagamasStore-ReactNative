import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Headers, PesananMekanikTabSection} from '../../components';

const PesananMekanik = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Headers title="Pesanan Mekanik" onPress={() => navigation.goBack('')} />

      <PesananMekanikTabSection />
    </View>
  );
};

export default PesananMekanik;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
  },
});
