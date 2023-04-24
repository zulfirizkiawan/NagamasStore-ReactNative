import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardGaleri, CardProfile, Gap} from '../../components';
import {Paint} from '../../assets';

const Galeri = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CardProfile />
      <Text style={styles.titleProduk}>Galeri</Text>
      <Gap height={20} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapProduct}>
          <CardGaleri
            image={Paint}
            title="Repaint Green Glowsy"
            onPress={() => navigation.navigate('DetailGaleri')}
          />
          <CardGaleri image={Paint} title="Repaint Green Glowsy" />
          <CardGaleri image={Paint} title="Repaint Green Glowsy" />
          <CardGaleri image={Paint} title="Repaint Green Glowsy" />
          <CardGaleri image={Paint} title="Repaint Green Glowsy" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Galeri;

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
  wrapTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
