import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CardGaleri, CardProfile, Gap} from '../../components';
import {Paint, people} from '../../assets';
import {getData} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {getGaleryData} from '../../redux/action';

const Galeri = ({navigation}) => {
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

  const dispatch = useDispatch();

  const {galery} = useSelector(state => state.galeryReducer);
  useEffect(() => {
    dispatch(getGaleryData());
  }, []);

  return (
    <View style={styles.container}>
      <CardProfile
        image={photo}
        name={userProfile.name}
        email={userProfile.email}
      />
      <Text style={styles.titleProduk}>Galeri</Text>
      <Gap height={20} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapProduct}>
          {galery.map(itemGalery => {
            return (
              <CardGaleri
                key={itemGalery.id}
                image={{uri: itemGalery.galleryPhotoPath}}
                title={itemGalery.repair_type}
                onPress={() => navigation.navigate('DetailGaleri', itemGalery)}
              />
            );
          })}
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
